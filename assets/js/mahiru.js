document.addEventListener('DOMContentLoaded', () => {
    // --- Lấy các phần tử DOM ---
    const terminalContainer = document.getElementById('terminal-container');
    const hiddenInput = document.getElementById('hidden-input');
    const textInput = document.getElementById('text-input');
    const terminalOutput = document.getElementById('terminal-output');
    const terminalBody = document.getElementById('terminal-body');

    // --- MỚI: Lấy phần tử ảnh slideshow ---
    const slideshowImageElement = document.getElementById('artwork-slideshow');


    // ======================================================
    // PHẦN MỚI: LOGIC SLIDESHOW ẢNH
    // ======================================================

    // --- TÙY CHỈNH: Đặt tên các file ảnh của bạn vào đây ---
    const slideshowImages = [
        'assets/images/mahiru/slide1.png',
        'assets/images/mahiru/slide2.png',
        'assets/images/mahiru/slide3.png'
        // Thêm bao nhiêu ảnh tùy thích
    ];

    let currentImageIndex = 0;

    function changeImage() {
        // Tăng chỉ số ảnh, quay về 0 nếu hết mảng
        currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;

        // 1. Làm mờ ảnh hiện tại (quá trình này mất 1.5s)
        slideshowImageElement.style.opacity = 0;

        // 2. Chờ đúng 1.5s rồi mới đổi ảnh và hiện ra
        setTimeout(() => {
            slideshowImageElement.src = slideshowImages[currentImageIndex];
            slideshowImageElement.style.opacity = 1;
        }, 2000); // ĐỔI: Phải khớp với transition trong CSS (2s = 2000ms)
    }

    // Tự động gọi hàm changeImage sau mỗi 6 giây
    setInterval(changeImage, 6000); // ĐỔI: Tăng tổng thời gian để có cảm giác chậm rãi


    // ======================================================
    // PHẦN LOGIC TERMINAL (Giữ nguyên)
    // ======================================================

    hiddenInput.focus();

    terminalContainer.addEventListener('click', () => {
        hiddenInput.focus();
    });

    const autocompleteSuggestion = document.getElementById('autocomplete-suggestion');
    const COMMANDS = ['help', 'info', 'projects', 'mahiru', 'amane', 'clear'];

    hiddenInput.addEventListener('input', () => {
        const value = hiddenInput.value;
        textInput.textContent = value;
        handleAutocomplete(value);
    });

    hiddenInput.addEventListener('keydown', (e) => {
        if ((e.key === 'Tab' || e.key === 'ArrowRight') && autocompleteSuggestion.textContent) {
            e.preventDefault();
            const suggestionText = autocompleteSuggestion.textContent;
            hiddenInput.value += suggestionText;
            textInput.textContent = hiddenInput.value;
            autocompleteSuggestion.textContent = '';
        }
        else if (e.key === 'Enter') {
            e.preventDefault();
            const command = hiddenInput.value.trim().toLowerCase();

            const commandLine = document.createElement('div');
            commandLine.innerHTML = `<span class="prompt">amane@shiina:~$</span><span>${command}</span>`;
            terminalOutput.appendChild(commandLine);

            processCommand(command);

            hiddenInput.value = '';
            textInput.textContent = '';
            autocompleteSuggestion.textContent = '';

            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });

    function handleAutocomplete(currentValue) {
        if (!currentValue) {
            autocompleteSuggestion.textContent = '';
            return;
        }
        const matches = COMMANDS.filter(cmd => cmd.startsWith(currentValue));
        if (matches.length === 1 && matches[0] !== currentValue) {
            const suggestion = matches[0].substring(currentValue.length);
            autocompleteSuggestion.textContent = suggestion;
        } else {
            autocompleteSuggestion.textContent = '';
        }
    }

    function processCommand(command) {
        let output = '';
        switch (command) {
            case 'help':
                output = `
Available commands:
  help      - Shows this list of commands.
  info      - Displays my profile information.
  projects  - Lists my major projects.
  mahiru    - A word from the angel.
  amane     - Amane's thoughts.
  clear     - Clears the terminal screen.
                `;
                break;
            case 'info':
                const infoHTML = `
                    <div class="info-output">
                        <img src="assets/mahiru-artwork.jpg" alt="avatar" class="info-avatar">
                        <div class="info-text">
                            <p><b>Trần Hữu Đạt @tranhuudat</b></p>
                            <p>--------------------------</p>
                            <p>Đây là Amane... à không, là Đạt.</p>
                            <p>Một sinh viên Kỹ thuật Phần mềm đã xây dựng nên "căn nhà" này.</p>
                            <p>Cậu ấy thích code và thỉnh thoảng... nấu ăn (dù không ngon bằng Mahiru).</p>
                            <p>Bạn có thể xem các dự án của cậu ấy bằng lệnh 'projects'.</p>
                        </div>
                    </div>`;
                appendHTML(infoHTML);
                return;
            case 'projects':
                output = `
My Projects:
    - <b>BrickShop</b>: An e-commerce platform for building blocks using Node.js.
    - <b>ANIME.TV</b>: A streaming site clone built with pure JavaScript.
    - <b>Portfolio Website</b>: My personal site showcasing my work, built with HTML/CSS/JS.
                `;
                break;
            case 'mahiru':
                output = `"Đừng lo, từ giờ tớ sẽ ở đây để chăm sóc cho cậu, Amane."`;
                break;
            case 'amane':
                output = `"Cô ấy... thật sự là một thiên thần."`;
                break;
            case 'clear':
                terminalOutput.innerHTML = '';
                return;
            default:
                output = `Command not found: ${command}. Type 'help' for a list of commands.`;
                break;
        }
        appendOutput(output);
    }

    function appendOutput(text) {
        const p = document.createElement('p');
        p.textContent = text;
        terminalOutput.appendChild(p);
    }

    function appendHTML(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        terminalOutput.appendChild(div);
    }
});