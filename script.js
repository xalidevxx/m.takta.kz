document.addEventListener('DOMContentLoaded', function () {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;

	const appStoreButton = document.getElementById('appStoreButton');
	const androidButton = document.getElementById('androidButton');
	const webButton = document.getElementById('webButton');

	const iosImg = document.getElementById('iosImg');
	const androidImg = document.getElementById('androidImg');
	const webImg = document.getElementById('webImg');

	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		appStoreButton.style.display = 'flex';
		iosImg.style.display = 'block';
	} else if (/android/i.test(userAgent)) {
		androidButton.style.display = 'flex';
		androidImg.style.display = 'block';
	} else {
		webButton.style.display = 'flex';
		webImg.style.display = 'block';
	}
});
