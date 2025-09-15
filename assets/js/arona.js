document.addEventListener('DOMContentLoaded', () => {
    // Cập nhật đồng hồ
    const timeEl = document.getElementById('os-time');
    function updateTime() {
        timeEl.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    updateTime();
    setInterval(updateTime, 1000);

    // Logic Gacha
    const recruitButton = document.getElementById('recruit-button');
    const gachaModal = document.getElementById('gacha-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const gachaImage = document.getElementById('gacha-image');
    const gachaQuote = document.getElementById('gacha-quote');
    const recruitSound = document.getElementById('recruit-sound');

    
    recruitButton.addEventListener('click', () => {
        // Chơi âm thanh (nếu bạn có file mp3)
        if (recruitSound) {
            recruitSound.currentTime = 0;
            recruitSound.play();
        }

        // Chọn ngẫu nhiên một kết quả
        const result = gachaPool[Math.floor(Math.random() * gachaPool.length)];

        // Cập nhật nội dung modal
        gachaImage.src = result.img;
        gachaQuote.textContent = result.quote;

        // Hiển thị modal
        gachaModal.classList.add('is-active');
    });

    // Ẩn modal khi click ra ngoài
    modalBackdrop.addEventListener('click', () => {
        gachaModal.classList.remove('is-active');
    });
});