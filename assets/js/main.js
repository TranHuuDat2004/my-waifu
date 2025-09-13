document.addEventListener('DOMContentLoaded', async () => {
    // --- BƯỚC 1: LẤY ID NHÂN VẬT TỪ URL ---
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');

    if (!characterId || !characters[characterId]) {
        document.body.innerHTML = `<h1>Character not found!</h1><p>Please provide a valid ID, like <a href="?id=mahiru">?id=mahiru</a></p>`;
        return;
    }

    const characterData = characters[characterId];

    // --- BƯỚC 2: TẢI VÀ "BƠM" LAYOUT VÀO TRANG ---
    try {
        const response = await fetch(characterData.layout);
        if (!response.ok) throw new Error(`Layout not found: ${characterData.layout}`);
        
        const layoutHtml = await response.text();
        // Bơm layout vào body, các thẻ script và input ẩn vẫn nằm ngoài
        const mainContainer = document.createElement('div');
        mainContainer.innerHTML = layoutHtml;
        document.body.prepend(mainContainer);

        // --- BƯỚC 3: "ĐỔ" DỮ LIỆU VÀO CÁC PLACEHOLDER ---
        populateData(characterData);
        
        // --- BƯỚC 4: KHỞI TẠO CÁC TÍNH NĂNG TƯƠNG TÁC ---
        initializeFeatures(characterData);

    } catch (error) {
        console.error("Error loading character:", error);
        document.body.innerHTML = `<h1>Error loading layout.</h1><p>${error.message}</p>`;
    }
});


// --- HÀM "ĐỔ" DỮ LIỆU ---
function populateData(data) {
    document.title = data.name; // Cập nhật tiêu đề trang

    // Helper function để tránh lặp code
    const setField = (field, value, isHtml = false) => {
        const element = document.querySelector(`[data-field="${field}"]`);
        if (element) {
            if (isHtml) element.innerHTML = value;
            else element.textContent = value;
        }
    };

    setField('character-name', data.name);
    setField('card-subtitle', data.cardSubtitle);
    setField('slideshow-image-src', data.slideshowImages ? data.slideshowImages[0] : '');
    setField('story-image-src', data.storyImage, true, 'src');
    
    // Xử lý các trường HTML phức tạp
    if (data.socialLinks) {
        const socialHtml = data.socialLinks.map(link => 
            `<a href="${link.href}" target="_blank" aria-label="${link.icon}"><i class="${link.icon}"></i></a>`
        ).join('');
        setField('social-links-html', socialHtml, true);
    }
    setField('story-html', data.storyHTML, true);
    setField('terminal-welcome', data.terminalWelcome, true);
    setField('prompt-text', data.prompt);
    setField('footer-quote', data.footerQuote);
}

// --- HÀM KHỞI TẠO CÁC TÍNH NĂNG TƯƠNG TÁC ---
function initializeFeatures(data) {
    // 1. Khởi tạo Slideshow (nếu có)
    const slideshowElement = document.getElementById('artwork-slideshow');
    if (slideshowElement && data.slideshowImages && data.slideshowImages.length > 1) {
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % data.slideshowImages.length;
            slideshowElement.style.opacity = 0;
            setTimeout(() => {
                slideshowElement.src = data.slideshowImages[currentIndex];
                slideshowElement.style.opacity = 1;
            }, 1500);
        }, 6000);
    }

    // 2. Khởi tạo Gallery (nếu có)
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid && data.galleryConfig) {
        // ... (Code tạo gallery và Intersection Observer từ câu trả lời trước)
        // Ví dụ:
        const { tap, gif } = data.galleryConfig;
        for (let i = 1; i <= tap.count; i++) { /* ... tạo ảnh tap ... */ }
        for (let i = 1; i <= gif.count; i++) { /* ... tạo ảnh gif ... */ }
        // ... khởi tạo Intersection Observer ...
    }

    // 3. Khởi tạo Terminal (nếu có)
    const terminalBody = document.getElementById('terminal-body');
    if (terminalBody) {
        // ... (Toàn bộ code xử lý terminal từ câu trả lời trước)
        // QUAN TRỌNG: Sửa lại để dùng dữ liệu từ `data`
        // const COMMANDS = Object.keys(data.commands);
        // trong processCommand: const output = data.commands[command] || `Command not found...`;
    }
}