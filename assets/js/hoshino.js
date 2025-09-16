// assets/js/hoshino.js
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    // --- CẤU HÌNH ẢNH CỦA HOSHINO ---
    const hoshinoGalleryData = {
        path: 'assets/images/hoshino/gallery/',
        prefix: 'hoshino(',
        suffix: ')',
        ext: 'jpg',
        count: 20, // Cập nhật tổng số ảnh của Hoshino
        captions: [
            "Uhe~ So sleepy...", "Time for a nap.", "Is it break time yet?",
            "Fighting is a pain...", "Leave it to Oji-san.", "Protecting my friends.",
            "Abydos is my home.", "Don't wake me up.", "Whale cushion is the best.",
            "Feeling motivated... maybe later.", "...", "Let's finish this quickly.",
            "Secretly a pro.", "Ready when needed.", "My shotgun speaks for me.",
            "For Abydos!", "Just five more minutes...", "The Wolf God.",
            "A peaceful day is the best.", "Don't mess with my students."
        ]
    };

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

    // --- TẠO GALLERY TỰ ĐỘNG ---
    for (let i = 1; i <= hoshinoGalleryData.count; i++) {
        const imageUrl = `${hoshinoGalleryData.path}${hoshinoGalleryData.prefix}${i}${hoshinoGalleryData.suffix}.${hoshinoGalleryData.ext}`;
        const imageAlt = `Hoshino gallery image ${i}`;
        const imageCaption = hoshinoGalleryData.captions[i-1] || '';
        const galleryItemElement = createImageItem(imageUrl, imageAlt, imageCaption);
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