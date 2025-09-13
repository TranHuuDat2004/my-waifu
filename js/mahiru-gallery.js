// ======================================================
// PHẦN TỰ ĐỘNG TẠO GALLERY VÀ LOGIC HIỆU ỨNG
// ======================================================
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');

    // Chỉ chạy code nếu có gallery trên trang
    if (galleryGrid) {
        
        // --- TÙY CHỈNH: ĐIỀN THÔNG SỐ ẢNH CỦA BẠN VÀO ĐÂY ---
        const TOTAL_TAP_IMAGES = 12; // Tổng số ảnh "tap"
        const TOTAL_MAHIRU_GIFS = 47; // Tổng số ảnh "Mahiru"
        
        const TAP_IMAGE_PATH = 'assets/mahiru/'; // Đường dẫn đến thư mục chứa ảnh "tap"
        const MAHIRU_GIF_PATH = 'assets/gifs/'; // Đường dẫn đến thư mục chứa ảnh "Mahiru"

        // --- PHẦN MỚI: TỰ ĐỘNG TẠO CÁC MỤC GALLERY ---
        
        // Vòng lặp 1: Tạo các ảnh "tap"
        for (let i = 1; i <= TOTAL_TAP_IMAGES; i++) {
            // Tạo một thẻ div cho mỗi item
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            // Tạo thẻ img bên trong
            const img = document.createElement('img');
            // QUAN TRỌNG: Đảm bảo tên file và đuôi file chính xác
            img.src = `${TAP_IMAGE_PATH}tap${i}.png`; 
            img.alt = `Gallery image tap ${i}`;
            
            // Gắn ảnh vào item, rồi gắn item vào lưới
            item.appendChild(img);
            galleryGrid.appendChild(item);
        }

        // Vòng lặp 2: Tạo các ảnh "Mahiru"
        for (let i = 1; i <= TOTAL_MAHIRU_GIFS; i++) {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            const img = document.createElement('img');
            // QUAN TRỌNG: Tên file có dấu cách và ngoặc đơn
            img.src = `${MAHIRU_GIF_PATH}Mahiru (${i}).gif`; 
            img.alt = `Gallery gif Mahiru ${i}`;

            item.appendChild(img);
            galleryGrid.appendChild(item);
        }


        // --- LOGIC HIỆU ỨNG CUỘN (CHẠY SAU KHI ĐÃ TẠO XONG GALLERY) ---
        
        // 1. Chọn tất cả các ảnh VỪA ĐƯỢC TẠO RA
        const galleryItems = document.querySelectorAll('.gallery-item');

        // 2. Tạo một "người quan sát"
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

        // 3. Bắt đầu theo dõi tất cả các ảnh
        galleryItems.forEach(item => {
            observer.observe(item);
        });
    }

    // --- CÁC PHẦN CODE KHÁC CỦA BẠN (TERMINAL, SLIDESHOW...) GIỮ NGUYÊN BÊN DƯỚI ---
    // ... (dán code cũ của terminal, slideshow... vào đây nếu chúng ở cùng file)
});

// Nếu code terminal và slideshow của bạn ở file khác thì không cần lo lắng