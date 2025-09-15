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

    const gachaPool = [
        // Trường hợp đặc biệt theo yêu cầu của bạn
        { img: 'assets/images/arona/Arona (1).png', quote: "Sensei, you got me! Hehe~ " },

        // 22 trường hợp còn lại với các biểu cảm và câu thoại khác nhau
        { img: 'assets/images/arona/Arona (2).png', quote: "W-Wah! Sensei, you scared me!" },
        { img: 'assets/images/arona/Arona (3).png', quote: "Hmph! Is Sensei slacking off again?" },
        { img: 'assets/images/arona/Arona (4).png', quote: "Don't worry, Sensei, I'll be right here." },
        { img: 'assets/images/arona/Arona (5).png', quote: "A blue envelope! This must be a good sign!" },
        { img: 'assets/images/arona/Arona (6).png', quote: "Hehe, Arona is always ready to help!" },
        { img: 'assets/images/arona/Arona (7).png', quote: "Is there something on my face, Sensei?" },
        { img: 'assets/images/arona/Arona (8).png', quote: "GRRRR! Don't underestimate Arona!" },
        { img: 'assets/images/arona/Arona (9).png', quote: "Let's make lots of happy memories together!" },
        { img: 'assets/images/arona/Arona (10).png', quote: "I'm a little tired... Can I rest for a bit?" },
        { img: 'assets/images/arona/Arona (11).png', quote: "What is it, Sensei? Do you need something?" },
        { img: 'assets/images/arona/Arona (12).png', quote: "E-Eh?! What are you looking at?!" },
        { img: 'assets/images/arona/Arona (13).png', quote: "Yaaay! Recruitment successful!" },
        { img: 'assets/images/arona/Arona (14).png', quote: "I'll keep your secrets safe, Sensei." },
        { img: 'assets/images/arona/Arona (15).png', quote: "P-Please don't cry, Sensei! Arona is here!" },
        { img: 'assets/images/arona/Arona (16).png', quote: "Hmm, what should we do next?" },
        { img: 'assets/images/arona/Arona (17).png', quote: "Sensei is thinking about something... I wonder what it is." },
        { img: 'assets/images/arona/Arona (18).png', quote: "I won't lose! Arona will do her best!" },
        { img: 'assets/images/arona/Arona (19).png', quote: "Eh? What's going on?!" },
        { img: 'assets/images/arona/Arona (20).png', quote: "SYSTEM ERROR! ... Just kidding! Hehe." },
        { img: 'assets/images/arona/Arona (21).png', quote: "Hmm, let me think..." },
        { img: 'assets/images/arona/Arona (22).png', quote: "Everything is going according to plan!" },
        { img: 'assets/images/arona/Arona (23).png', quote: "Shhh! It's a secret between us, Sensei." },
    ];

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