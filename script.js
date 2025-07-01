document.addEventListener('DOMContentLoaded', function () {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
	const isAndroid = /android/i.test(userAgent);
	const appBtn = document.getElementById('app-btn');
	if (isIos) {
		appBtn.href = 'https://apps.apple.com/kz/app/takta-kz/id6504254858';
	} else if (isAndroid) {
		appBtn.href =
			'https://play.google.com/store/apps/details?id=kz.takta.takta';
	} else {
		window.location.href = 'https://takta.kz';
	}
});
