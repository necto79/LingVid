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