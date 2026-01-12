// assets/js/miku.js

document.addEventListener('DOMContentLoaded', () => {
    // Gallery Data
    const galleryImages = [
        { src: 'assets/images/miku/miku-tech.jpg', caption: 'Gaming Time' },
        { src: 'assets/images/miku/miku-cooking.jpg', caption: 'Trying to Cook' },
        { src: 'assets/images/miku/wedding.jpg', caption: 'Wedding' },
        { src: 'assets/images/miku/miku-shy.jpg', caption: '///' },
        { src: 'assets/images/miku/miku-uniform.jpeg', caption: 'Uniform' },
        { src: 'assets/images/miku/miku-smile.jpg', caption: 'Finally Smiling' }
    ];

    const galleryGrid = document.querySelector('.gallery-grid');

    if (galleryGrid) {
        galleryImages.forEach(img => {
            const card = document.createElement('div');
            card.className = 'polaroid';

            // Random rotation between -3 and 3 degree
            const randomRotation = (Math.random() * 6 - 3).toFixed(2);
            card.style.setProperty('--rotation', `${randomRotation}deg`);

            card.innerHTML = `
                <img src="${img.src}" alt="${img.caption}" loading="lazy">
                <div class="polaroid-caption">${img.caption}</div>
            `;

            galleryGrid.appendChild(card);
        });
    }

    // Scroll Animation for Profile Image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < 500) {
                profileImg.style.transform = `rotate(${-2 + scrolled * 0.01}deg)`;
            }
        });
    }
});
