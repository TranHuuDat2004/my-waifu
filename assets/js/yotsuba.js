// assets/js/yotsuba.js

document.addEventListener('DOMContentLoaded', () => {

    // Add random rotation to club tags
    const tags = document.querySelectorAll('.club-tag');
    tags.forEach(tag => {
        const randomRot = Math.random() * 10 - 5; // -5 to +5 degrees
        tag.style.setProperty('--rotate', `${randomRot}deg`);
    });

    // Simple stat counter animation (simulated)
    const stats = document.querySelectorAll('.stat-value');
    stats.forEach(stat => {
        const target = parseInt(stat.innerText);
        let current = 0;
        const increment = Math.ceil(target / 50);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.innerText = current + (stat.dataset.unit || "");
        }, 30);
    });

    // Cheer Button Interaction (if we add one)
    console.log("Yotsuba page loaded! Genki full power!");
});
