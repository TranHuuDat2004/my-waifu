// assets/js/nino.js

document.addEventListener('DOMContentLoaded', () => {

    // Gallery Data - Simulating an Instagram Feed
    const galleryItems = [
        { src: 'assets/images/nino/take-photo.jpeg', likes: '12.5k', comments: '342' },
        { src: 'assets/images/nino/festival.jpg', likes: '8.9k', comments: '120' },
        { src: 'assets/images/nino/uniform.jpeg', likes: '15.1k', comments: '890' },
        { src: 'assets/images/nino/nino-idol.jpg', likes: '22k', comments: '1.2k' },
        { src: 'assets/images/nino/nino-sisters.jpg', likes: '19k', comments: '560' },
        { src: 'assets/images/nino/wedding.jpg', likes: '30k', comments: '2.5k' },
    ];

    const galleryGrid = document.querySelector('.gallery-grid');

    if (galleryGrid) {
        galleryItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'insta-item';

            div.innerHTML = `
                <img src="${item.src}" alt="Nino Moment" class="insta-img" loading="lazy">
                <div class="insta-overlay">
                    <div class="insta-stats">
                        <span><i class="fas fa-heart"></i> ${item.likes}</span>
                        <span><i class="fas fa-comment"></i> ${item.comments}</span>
                    </div>
                </div>
            `;

            galleryGrid.appendChild(div);
        });
    }

    // Smooth Reveal on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.rule-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(el);
    });
});
