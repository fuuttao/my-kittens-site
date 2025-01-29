// Функция для анимации табличек при нажатии
function animateQuality(element) {
    // Добавляем класс с анимацией
    element.classList.add('animate');

    // Убираем анимацию через 0.5 секунд (длительность анимации)
    setTimeout(() => {
        element.classList.remove('animate');
    }, 500);
}
