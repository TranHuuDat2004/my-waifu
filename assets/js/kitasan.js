// assets/js/kitasan.js
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    // --- CẤU HÌNH ẢNH CỦA KITASAN BLACK ---
    const kitasanGalleryData = {
        path: 'assets/images/kitasan/gallery/',
        prefix: 'kitasan(',
        suffix: ')',
        ext: 'jpg',
        count: 20, // Cập nhật tổng số ảnh của Kitasan Black
    };

    // --- HÀM TỐI ƯU (Tải ảnh trước) ---
    function createImageItem(src, alt) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        const preloader = new Image();
        preloader.onload = () => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alt;
            item.appendChild(img);
            observer.observe(item);
        };
        preloader.src = src;
        return item;
    }

    // --- TẠO GALLERY TỰ ĐỘNG ---
    for (let i = 1; i <= kitasanGalleryData.count; i++) {
        const imageUrl = `${kitasanGalleryData.path}${kitasanGalleryData.prefix}${i}${kitasanGalleryData.suffix}.${kitasanGalleryData.ext}`;
        const imageAlt = `Kitasan Black gallery image ${i}`;
        const galleryItemElement = createImageItem(imageUrl, imageAlt);
        galleryGrid.appendChild(galleryItemElement);
    }
    
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