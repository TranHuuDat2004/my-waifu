// assets/js/hub-script.js

document.addEventListener('DOMContentLoaded', () => {
    const characterGrid = document.getElementById('characterGrid');
    const filterWrapper = document.getElementById('filterWrapper');
    const searchInput = document.getElementById('searchInput');

    if (!characterGrid || !filterWrapper || !searchInput) return;

    // --- State ---
    let currentFilter = 'all';
    let searchQuery = '';

    // --- Initialization ---
    init();

    function init() {
        renderFilters();
        renderCharacters(charactersData);
        setupEventListeners();
        setupScrollAnimation();
    }

    // --- Render Functions ---
    function renderFilters() {
        // Extract unique layoutTypes for filtering
        const types = [...new Set(charactersData.map(char => char.layoutType))];
        
        // Capitalize function
        const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

        types.forEach(type => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.dataset.filter = type;
            btn.textContent = capitalize(type);
            filterWrapper.appendChild(btn);
        });
    }

    function renderCharacters(data) {
        characterGrid.innerHTML = ''; // Clear current

        if (data.length === 0) {
            characterGrid.innerHTML = '<p style="color:var(--color-text-secondary); grid-column: 1/-1; text-align:center;">No characters found.</p>';
            return;
        }

        data.forEach(char => {
            const card = document.createElement('a');
            card.href = `${char.id}.html`;
            card.className = 'character-card fade-in-scroll';
            card.style.opacity = '0'; // Initial state for animation
            card.style.transform = 'translateY(20px)';
            
            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${char.thumbImage}" alt="${char.name}" class="card-image" loading="lazy">
                    <div class="card-overlay"></div>
                </div>
                <div class="card-content">
                    <span class="card-series">${char.series}</span>
                    <h3 class="card-name">${char.name}</h3>
                    <span class="card-tag">${char.layoutTag}</span>
                </div>
            `;

            characterGrid.appendChild(card);
        });

        // Re-trigger animation observer for new elements
        setupScrollAnimation();
    }

    // --- Filtering Logic ---
    function filterData() {
        const filtered = charactersData.filter(char => {
            const matchesFilter = currentFilter === 'all' || char.layoutType === currentFilter;
            const matchesSearch = char.name.toLowerCase().includes(searchQuery) || 
                                  char.series.toLowerCase().includes(searchQuery);
            return matchesFilter && matchesSearch;
        });
        renderCharacters(filtered);
    }

    // --- Event Listeners ---
    function setupEventListeners() {
        // Search Input
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            filterData();
        });

        // Filter Buttons
        filterWrapper.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                // Remove active class from all
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                // Add active to clicked
                e.target.classList.add('active');
                
                currentFilter = e.target.dataset.filter;
                filterData();
            }
        });
    }

    // --- Animations ---
    function setupScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.fade-in-scroll').forEach(el => {
            observer.observe(el);
        });
    }
});