// assets/js/arona-gallery.js

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');

    if (galleryGrid) {
        
        // --- HÀM TỐI ƯU (Giữ nguyên) ---
        function createImageItem(src, alt, caption) {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            const preloader = new Image();
            preloader.onload = () => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = alt;
                item.appendChild(img);
                if (caption) {
                    const p = document.createElement('p');
                    p.className = 'gallery-caption';
                    p.textContent = caption;
                    item.appendChild(p);
                }
                observer.observe(item);
            };
            preloader.src = src;
            return item;
        }

        // --- LOGIC MỚI: TẠO GALLERY TỪ GACHAPOOL ---
        // Lặp trực tiếp qua mảng gachaPool đã được tải từ file arona-data.js
        gachaPool.forEach((gachaItem, index) => {
            const imageUrl = gachaItem.img;
            const imageAlt = `Arona gallery image ${index + 1}`;
            // Chú thích chính là câu quote
            const imageCaption = gachaItem.quote;

            const galleryItemElement = createImageItem(imageUrl, imageAlt, imageCaption);
            galleryGrid.appendChild(galleryItemElement);
        });
        
        // --- LOGIC HIỆU ỨNG CUỘN (Giữ nguyên) ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, { threshold: 0.1 });
    }
});