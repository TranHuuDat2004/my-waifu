// assets/js/anya.js

document.addEventListener('DOMContentLoaded', () => {

    // Mission Board Logic
    const missions = document.querySelectorAll('.mission-item');
    missions.forEach(item => {
        item.addEventListener('click', () => {
            const checkbox = item.querySelector('.check-box');
            checkbox.classList.toggle('checked');

            if (checkbox.classList.contains('checked')) {
                // Waku waku effect?
                console.log("Mission Complete!");
            }
        });
    });

    // Stella Star Collection
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            // Activate all stars up to this one
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });

            if (index === 7) { // 8th star (0-7)
                alert("IMPERIAL SCHOLAR REACHED! (Maybe...)");
            }
        });
    });

    console.log("Anya page loaded. Operation Strix in progress.");
});
