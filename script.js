document.addEventListener("DOMContentLoaded", function () {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Ссылки на кнопки
    const appStoreButton = document.getElementById("appStoreButton");
    const playMarketButton = document.getElementById("playMarketButton");
    const websiteButton = document.getElementById("websiteButton");

    // Логика проверки системы
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Устройство на iOS
        appStoreButton.style.display = "flex";
    } else if (/android/i.test(userAgent)) {
        // Устройство на Android
        playMarketButton.style.display = "flex";
    } else {
        // Для других устройств
        websiteButton.style.display = "flex";
    }
});
