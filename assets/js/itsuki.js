// assets/js/itsuki.js

document.addEventListener('DOMContentLoaded', () => {

    // Food Reviews Data
    const reviews = [
        {
            food: "Meat Bun",
            image: "assets/images/itsuki/meatbun.jpg",
            rating: 5,
            comment: "Warm, fluffy, and filled with juicy meat. Absolute perfection for a late-night snack!"
        },
        {
            food: "Fancy Parfait",
            image: "assets/images/itsuki/parfait.jpg",
            rating: 4,
            comment: "Very sweet and aesthetic. The cream ratio was a bit high, but the strawberries were fresh."
        },
        {
            food: "Curry Rice",
            image: "assets/images/itsuki/curry.jpg",
            rating: 5,
            comment: "Spicy and hearty! I ordered the extra large portion, and it was barely enough. Delicious!"
        }
    ];

    const reviewGrid = document.querySelector('.review-grid');

    if (reviewGrid) {
        reviews.forEach(item => {
            const stars = '<i class="fas fa-star"></i>'.repeat(item.rating) + '<i class="far fa-star"></i>'.repeat(5 - item.rating);

            const card = document.createElement('div');
            card.className = 'review-card';

            card.innerHTML = `
                <img src="${item.image}" alt="${item.food}" class="review-img" loading="lazy">
                <div class="review-content">
                    <div class="food-name">
                        ${item.food}
                        <div class="rating">${stars}</div>
                    </div>
                    <p class="review-text">"${item.comment}"</p>
                </div>
            `;

            reviewGrid.appendChild(card);
        });
    }

    // Simple interaction for hero image
    const heroImg = document.querySelector('.hero-image img');
    if (heroImg) {
        heroImg.addEventListener('click', () => {
            alert("Are you going to eat that?");
        });
    }
});
