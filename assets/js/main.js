async function sendMessageToTelegram(packageAddress, deliveryAddress, phoneNumber) {
    try {
        const chatId = -4184487890;
        const message = `Новый заказ\nАдрес посылки: ${packageAddress}\nАдрес доставки: ${deliveryAddress}\nТелефон: ${phoneNumber}`;
        const botToken = '7096096900:AAEdfspJ0kc7n3Or893T9WJOho-iud-Ex64';
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=html`;
        const response = await fetch(url, {method: 'POST'});
    } catch (error) {
        console.error('Ошибка при отправке сообщения в Телеграм: ', error);
        alert('Произошла ошибка при отправке сообщения. Проверьте консоль для более подробной информации');
    }
}





function validateForm() {
    let packageAddress = document.getElementById("packageAddress").value;
    let deliveryAddress = document.getElementById("deliveryAddress").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    
    sendMessageToTelegram(packageAddress, deliveryAddress, phoneNumber);
}