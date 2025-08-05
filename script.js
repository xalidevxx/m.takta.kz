document.addEventListener('DOMContentLoaded', function () {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	// const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
	const isAndroid = /android/i.test(userAgent);
	const appBtn = document.getElementById('app-btn');
	if (isAndroid) {
		appBtn.href =
			'https://play.google.com/store/apps/details?id=kz.takta.takta';
	}
});
