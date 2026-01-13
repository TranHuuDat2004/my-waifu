// assets/js/special-week.js

document.addEventListener('DOMContentLoaded', () => {

    // Stats Animation
    const stats = [
        { id: 'speed', value: 85, rank: 'A' },
        { id: 'stamina', value: 92, rank: 'S' }, /* Special Week is known for Stamina/Mid-Long dist */
        { id: 'power', value: 78, rank: 'B+' },
        { id: 'guts', value: 95, rank: 'S' }, /* Never give up! */
        { id: 'wisdom', value: 70, rank: 'B' }
    ];

    const statsContainer = document.getElementById('stats-container');

    if (statsContainer) {
        // Clear placeholder if any
        statsContainer.innerHTML = '';

        stats.forEach(stat => {
            const row = document.createElement('div');
            row.className = 'stat-row';

            row.innerHTML = `
                <div class="stat-label">${stat.id}</div>
                <div class="stat-bar-container">
                    <div class="stat-bar" style="width: 0%" data-width="${stat.value}%"></div>
                </div>
                <div class="stat-rank">${stat.rank}</div>
            `;

            statsContainer.appendChild(row);
        });

        // Trigger animation after a short delay
        setTimeout(() => {
            const bars = document.querySelectorAll('.stat-bar');
            bars.forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
        }, 300);
    }
});
