// assets/js/arona-gallery.js

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');

    if (galleryGrid) {
        
        // --- CẤU HÌNH ẢNH CỦA ARONA ---
        const imageSources = [
            { 
              path: 'assets/images/arona/', // Tạo một thư mục riêng cho gallery của Arona
              prefix: 'Arona (',
              suffix: ')',
              ext: 'png', // Giả sử đã chuẩn hóa
              count: 50 // Cập nhật tổng số ảnh của Arona
            }
            // Thêm các nguồn ảnh khác của Arona nếu có
        ];

        // --- HÀM TỐI ƯU (Giữ nguyên) ---
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

        // --- LOGIC TẠO GALLERY (Giữ nguyên) ---
        imageSources.forEach(source => {
            for (let i = 1; i <= source.count; i++) {
                const imageUrl = `${source.path}${source.prefix}${i}${source.suffix}.${source.ext}`;
                const imageAlt = `Arona gallery image ${i}`;
                const galleryItemElement = createImageItem(imageUrl, imageAlt);
                galleryGrid.appendChild(galleryItemElement);
            }
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