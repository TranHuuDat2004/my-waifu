document.addEventListener('DOMContentLoaded', () => {
    // ======================================================
    // LOGIC CHUNG CHO TẤT CẢ CÁC TRANG
    // ======================================================

    const slideshowElement = document.getElementById('artwork-slideshow');
    const terminalContainer = document.getElementById('terminal-container');
    const galleryGrid = document.querySelector('.gallery-grid');



    // --- 3. KHỞI TẠO GALLERY (Nếu có trên trang) - PHIÊN BẢN TỐI ƯU ---
    if (galleryGrid) {
        
        const imageSources = [
            // ... (Giữ nguyên cấu hình imageSources của bạn)
            { path: 'assets/images/mahiru/tap/', prefix: 'tap', suffix: '', ext: 'png', count: 12 },
            { path: 'assets/images/mahiru/gifs/', prefix: 'Mahiru (', suffix: ')', ext: 'gif', count: 47 },
            { path: 'assets/images/mahiru/Gallery/', prefix: 'Mahiru (', suffix: ')', ext: 'jpg', count: 100 }
        ];

        // --- HÀM TỐI ƯU: Tải ảnh trong nền trước khi hiển thị ---
        function createImageItem(src, alt) {
            // 1. Tạo container rỗng trước
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            // 2. Tạo một ảnh "vô hình" trong bộ nhớ để tải
            const preloader = new Image();
            
            // 3. Lắng nghe sự kiện 'load' - chỉ kích hoạt khi ảnh tải xong
            preloader.onload = () => {
                // 4. Khi đã tải xong, mới tạo thẻ <img> thật và chèn vào DOM
                const img = document.createElement('img');
                img.src = src;
                img.alt = alt;
                item.appendChild(img);
                
                // 5. Bắt đầu "quan sát" item này ĐỂ KÍCH HOẠT HIỆU ỨNG
                observer.observe(item);
            };
            
            // 6. Ra lệnh cho ảnh "vô hình" bắt đầu tải
            preloader.src = src;
            
            return item; // Trả về container rỗng ngay lập tức
        }

        // --- LOGIC TẠO GALLERY (Sử dụng hàm tối ưu) ---
        imageSources.forEach(source => {
            for (let i = 1; i <= source.count; i++) {
                const imageUrl = `${source.path}${source.prefix}${i}${source.suffix}.${source.ext}`;
                const imageAlt = `Gallery image ${i}`;
                
                const galleryItemElement = createImageItem(imageUrl, imageAlt);
                galleryGrid.appendChild(galleryItemElement);
            }
        });
        
        // --- LOGIC HIỆU ỨNG CUỘN (Chỉ khởi tạo, không cần chạy observe ở đây nữa) ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, {
            threshold: 0.1 
        });
    }
});