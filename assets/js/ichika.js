// assets/js/ichika.js

document.addEventListener('DOMContentLoaded', () => {

    // Filmography Data
    const films = [
        {
            title: "School Days",
            role: "Lead Role: Tamako",
            image: "assets/images/ichika/poster1.jpg"
        },
        {
            title: "The Mysterious Thief",
            role: "Antagonist: Lady X",
            image: "assets/images/ichika/poster2.jpg"
        },
        {
            title: "Wedding",
            role: "Supporting: Yumi",
            image: "assets/images/ichika/wedding.jpg"
        }
    ];

    const filmGrid = document.querySelector('.film-grid');

    if (filmGrid) {
        films.forEach(film => {
            const div = document.createElement('div');
            div.className = 'film-card';

            div.innerHTML = `
                <img src="${film.image}" alt="${film.title}" class="film-img" loading="lazy">
                <div class="film-info">
                    <h3 class="film-title">${film.title}</h3>
                    <div class="film-role">${film.role}</div>
                </div>
            `;

            filmGrid.appendChild(div);
        });
    }

    // Parallax effect for Hero
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroSection) {
            heroSection.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        }
    });
});
