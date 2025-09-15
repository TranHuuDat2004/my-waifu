// assets/js/hub-script.js

document.addEventListener('DOMContentLoaded', () => {
    const characterGrid = document.querySelector('.character-grid');

    // Nếu không tìm thấy grid thì không làm gì cả
    if (!characterGrid) return;

    // Lặp qua mảng dữ liệu từ file data-hub.js
    charactersData.forEach(char => {
        // Sử dụng template literals để tạo HTML cho mỗi card
        const cardHTML = `
            <a href="${char.id}.html" class="character-card">
                <div class="card-image">
                    <img src="${char.thumbImage}" alt="${char.name}">
                </div>
                <div class="card-content">
                    <p class="card-series">${char.series}</p>
                    <h3 class="card-name">${char.name}</h3>
                    <span class="layout-tag tag-${char.layoutType}">${char.layoutTag}</span>
                </div>
            </a>
        `;

        // Chèn HTML vừa tạo vào cuối của grid
        characterGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
});