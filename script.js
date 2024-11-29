document.addEventListener('DOMContentLoaded', function () {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	const appStoreButton = document.getElementById('appStoreButton');
	const playMarketButton = document.getElementById('playMarketButton');
	const websiteButton = document.getElementById('websiteButton');
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		appStoreButton.style.display = 'flex';
	} else if (/android/i.test(userAgent)) {
		playMarketButton.style.display = 'flex';
	} else {
		websiteButton.style.display = 'flex';
	}
});
