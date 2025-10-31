// Дополнительный функционал для страницы videos.html

document.addEventListener('DOMContentLoaded', function () {
    // Функциональность фильтров
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterGroup = this.closest('.filter-options');
            const activeBtn = filterGroup.querySelector('.filter-btn.active');

            if (activeBtn !== this) {
                activeBtn.classList.remove('active');
                this.classList.add('active');

                // Здесь будет логика фильтрации видео
                filterVideos();
            }
        });
    });

    // Функциональность сортировки
    const sortSelect = document.getElementById('sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            // Здесь будет логика сортировки видео
            sortVideos(this.value);
        });
    }

    // Функциональность кнопок сохранения
    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(button => {
        button.addEventListener('click', function () {
            const videoItem = this.closest('.video-list-item');
            const videoTitle = videoItem.querySelector('.video-title').textContent;

            if (this.textContent === 'Сохранить') {
                this.textContent = 'Сохранено';
                this.style.background = '#4CAF50';
                this.style.color = 'white';
                this.style.borderColor = '#4CAF50';
                alert(`Видео "${videoTitle}" добавлено в сохраненные`);
            } else {
                this.textContent = 'Сохранить';
                this.style.background = 'transparent';
                this.style.color = '#666';
                this.style.borderColor = '#ddd';
                alert(`Видео "${videoTitle}" удалено из сохраненных`);
            }
        });
    });

    // Функциональность пагинации
    const paginationButtons = document.querySelectorAll('.pagination-btn:not(.prev):not(.next)');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function () {
            const activeBtn = document.querySelector('.pagination-btn.active');
            activeBtn.classList.remove('active');
            this.classList.add('active');

            // Обновляем состояние кнопок "Назад" и "Вперед"
            updatePaginationState();
        });
    });

    // Функция обновления состояния пагинации
    function updatePaginationState() {
        const activePage = parseInt(document.querySelector('.pagination-btn.active').textContent);
        const prevBtn = document.querySelector('.pagination-btn.prev');
        const nextBtn = document.querySelector('.pagination-btn.next');

        prevBtn.disabled = activePage === 1;
        nextBtn.disabled = activePage === 3; // В реальном приложении это будет зависеть от общего количества страниц
    }

    // Имитация фильтрации видео
    function filterVideos() {
        console.log('Фильтрация видео...');
        // В реальном приложении здесь будет запрос к серверу или фильтрация на клиенте
    }

    // Имитация сортировки видео
    function sortVideos(criteria) {
        console.log(`Сортировка видео по: ${criteria}`);
        // В реальном приложении здесь будет запрос к серверу или сортировка на клиенте
    }

    // Инициализация состояния пагинации
    updatePaginationState();
    
});
// Функционал для страниц авторизации и регистрации

// Переключение видимости пароля
const passwordToggles = document.querySelectorAll('.password-toggle');
passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.textContent = '🔒';
        } else {
            input.type = 'password';
            this.textContent = '👁️';
        }
    });
});

// Проверка силы пароля
const passwordInput = document.getElementById('regPassword');
if (passwordInput) {
    passwordInput.addEventListener('input', function () {
        const password = this.value;
        const strengthBar = document.querySelector('.strength-fill');
        const strengthText = document.querySelector('.strength-text');

        let strength = 0;

        if (password.length >= 8) strength++;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
        if (password.match(/\d/)) strength++;
        if (password.match(/[^a-zA-Z\d]/)) strength++;

        strengthBar.setAttribute('data-strength', strength);

        const strengthLabels = ['Слабый пароль', 'Средний пароль', 'Хороший пароль', 'Надежный пароль'];
        strengthText.textContent = strengthLabels[strength] || 'Слабый пароль';
    });
}

// Проверка совпадения паролей
const confirmPasswordInput = document.getElementById('confirmPassword');
if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', function () {
        const password = document.getElementById('regPassword').value;
        const confirmPassword = this.value;

        if (confirmPassword && password !== confirmPassword) {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }
    });
}

// Обработка форм
const authForms = document.querySelectorAll('.auth-form');
authForms.forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // В реальном приложении здесь будет отправка данных на сервер
        const submitBtn = this.querySelector('.auth-submit-btn');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Загрузка...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            alert('Форма успешно отправлена!');
        }, 1500);
    });
});

// Социальные кнопки
const socialBtns = document.querySelectorAll('.social-btn');
socialBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const provider = this.classList[1];
        alert(`Вход через ${provider} будет реализован позже`);
    });
});