/*
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const close = document.getElementById('close');
    const openPopupButton = document.getElementById('open-popup');
	*/

/*
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const openPopupButton = document.getElementById('open-popup');
    const close = document.getElementById('close');

    openPopupButton.addEventListener('click', () => {
        overlay.classList.add('active');
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});
*/




document.getElementById('open-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('active');
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('active');
});

document.getElementById('ok-button').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('active');
});

	
	
	

