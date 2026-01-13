// assets/js/hoshino.js
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    // --- CẤU HÌNH ẢNH CỦA HOSHINO ---
    // --- CẤU HÌNH ẢNH CỦA HOSHINO ---
    const hoshinoImages = [
        "hoshino.jpg",
        "hoshino1.jpg",
        "hoshino2.jpg",
        "hoshino3.jpg"
    ];

    // --- HÀM TỐI ƯU (Tải ảnh trước) ---
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
    hoshinoImages.forEach((filename, index) => {
        const imageUrl = `assets/images/hoshino/${filename}`;
        const imageAlt = `Hoshino gallery image ${index + 1}`;
        const imageCaption = hoshinoCaptions[index] || '';

        // Use the same helper or inline the logic if simpler (helper is fine)
        const galleryItemElement = createImageItem(imageUrl, imageAlt, imageCaption);
        galleryGrid.appendChild(galleryItemElement);
    });

    // --- KÍCH HOẠT HIỆU ỨNG CUỘN ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.1 });
});