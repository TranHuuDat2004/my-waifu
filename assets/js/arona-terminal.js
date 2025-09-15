// assets/js/arona-terminal.js
document.addEventListener('DOMContentLoaded', () => {
    // Lấy các phần tử DOM cần thiết
    const terminalBody = document.getElementById('terminal-body');
    const terminalOutput = document.getElementById('terminal-output');
    const hiddenInput = document.getElementById('hidden-input');
    const textInput = document.getElementById('text-input');
    const autocompleteSuggestion = document.getElementById('autocomplete-suggestion');
    
    // Đặt focus vào input ẩn để người dùng có thể gõ ngay
    hiddenInput.focus();
    // Focus lại khi click vào bất cứ đâu trong terminal
    terminalBody.addEventListener('click', () => {
        hiddenInput.focus();
    });

    // Danh sách các lệnh của Arona
    const COMMANDS = ['help', 'info', 'projects', 'recruit', 'clear', 'exit'];

    // Cập nhật text hiển thị và gợi ý khi gõ
    hiddenInput.addEventListener('input', () => {
        const value = hiddenInput.value;
        textInput.textContent = value;
        handleAutocomplete(value);
    });

    // Xử lý các phím đặc biệt
    hiddenInput.addEventListener('keydown', (e) => {
        // Chấp nhận gợi ý bằng Tab hoặc Mũi tên phải
        if ((e.key === 'Tab' || e.key === 'ArrowRight') && autocompleteSuggestion.textContent) {
            e.preventDefault();
            hiddenInput.value += autocompleteSuggestion.textContent;
            textInput.textContent = hiddenInput.value;
            autocompleteSuggestion.textContent = '';
        }
        // Gửi lệnh bằng Enter
        else if (e.key === 'Enter') {
            e.preventDefault();
            const command = hiddenInput.value.trim().toLowerCase();
            
            // Hiển thị lệnh đã gõ
            const commandLine = document.createElement('div');
            commandLine.innerHTML = `<span class="prompt">sensei@schale:~$</span><span>${command}</span>`;
            terminalOutput.appendChild(commandLine);

            // Xử lý lệnh
            if (command) {
                processCommand(command);
            }

            // Dọn dẹp và cuộn xuống
            hiddenInput.value = '';
            textInput.textContent = '';
            autocompleteSuggestion.textContent = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });

    // Hàm xử lý gợi ý
    function handleAutocomplete(currentValue) {
        if (!currentValue) {
            autocompleteSuggestion.textContent = '';
            return;
        }
        const matches = COMMANDS.filter(cmd => cmd.startsWith(currentValue));
        if (matches.length === 1 && matches[0] !== currentValue) {
            autocompleteSuggestion.textContent = matches[0].substring(currentValue.length);
        } else {
            autocompleteSuggestion.textContent = '';
        }
    }

    // Hàm xử lý lệnh và in kết quả
    function processCommand(command) {
        let output = '';
        switch (command) {
            case 'help':
                output = `
Arona's Command List:
  help      - Displays this help message.
  info      - Shows Arona's and my creator's profile.
  projects  - Lists my creator's major projects.
  recruit   - Try to recruit a student! (A little gacha fun).
  clear     - Clears the terminal screen.
  exit      - Returns to Arona's main OS page.
                `;
                break;
            case 'info':
                output = `
System AI: Arona
Status: Ready to assist Sensei!
----------------------------------
Creator: Trần Hữu Đạt
Portfolio: my-waifu project
Mission: To create wonderful digital worlds!
                `;
                break;
            case 'projects':
                output = `
Sensei's Missions (Projects):
  - BrickShop: An e-commerce platform built with Node.js.
  - ANIME.TV: A streaming site clone with pure JavaScript.
  - My Waifu Project: This very project, an archive of cherished data!
                `;
                break;
            case 'recruit':
                output = `Searching for new students... Blue envelope detected!\nIt's a ★★★ student! Congratulations, Sensei!`;
                break;
            case 'clear':
                terminalOutput.innerHTML = `<p>Confused? Type 'help' and press Enter to get started!</p>`;
                return; // Trả về sớm để không in thêm gì
            case 'exit':
                output = 'Returning to Main OS...';
                setTimeout(() => { window.location.href = 'arona.html'; }, 1000);
                break;
            default:
                output = `Arona doesn't recognize that command, Sensei! (･Д･。)\nTry 'help' to see what I can do!`;
                break;
        }
        appendOutput(output);
    }
    
    // Hàm in kết quả ra màn hình
    function appendOutput(text) {
        const p = document.createElement('p');
        p.textContent = text;
        terminalOutput.appendChild(p);
    }
});