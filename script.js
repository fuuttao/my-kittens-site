
// Пример JavaScript, чтобы показывать сообщение при нажатии на кнопку
document.addEventListener('DOMContentLoaded', function () {
    const messageButton = document.createElement('button');
    messageButton.textContent = 'Нажми на меня!';
    document.body.appendChild(messageButton);

    messageButton.addEventListener('click', function () {
        alert('С любовью, твоя манюня!');
    });
});
