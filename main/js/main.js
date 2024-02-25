async function sendMessageToTelegram() {
    try {
        const chatId = -4184487890;
        const message = 'Привет, из моего сайта';
        const botToken = '7096096900:AAEdfspJ0kc7n3Or893T9WJOho-iud-Ex64';
        const url = 'https://api.telegram.org/bot7096096900:AAEdfspJ0kc7n3Or893T9WJOho-iud-Ex64/sendMessage';
        const response = await fetch(url, {method: 'POST'});
    } catch (error) {
        console.error('Ошибка при отправке сообщения в Телеграм: ', error);
        alert('Произошла ошибка при отправке сообщения. Проверьте консоль для более подробной информации');
    }
}