const characters = {
    // --- NHÂN VẬT 1: MAHIRU SHIINA ---
    mahiru: {
        name: "Mahiru Shiina",
        layout: "_layouts/warm_and_cozy.html", // <-- Chỉ định layout
        
        // Dữ liệu cho layout warm_and_cozy
        cardSubtitle: "Chào mừng đến căn nhà nhỏ của chúng tôi",
        slideshowImages: [
            'assets/images/mahiru/slide1.png',
            'assets/images/mahiru/slide2.png',
            'assets/images/mahiru/slide3.png'
        ],
        socialLinks: [
            { href: "https://github.com/TranHuuDat2004", icon: "fab fa-github" },
            { href: "https://linkedin.com/in/tranhuudat2004", icon: "fab fa-linkedin" },
            { href: "mailto:tranhuudat.cv@gmail.com", icon: "fas fa-envelope" }
        ],
        storyImage: "assets/images/mahiru/mahiru_full_body.png",
        storyHTML: `
            <p>Living next door is a girl they call an angel. She is beautiful and kind, always perfect in everything she does.</p>
            <p>She keeps the warmth of a happy home, tucked safely in the meals she cooks and the care she gives.</p>
            <p>She loves Amane, and dreams of one day having him by her side, sharing simple, happy days together.</p>
        `,
        galleryConfig: {
            tap: { count: 12, path: 'assets/images/mahiru/gallery/tap', ext: 'png' },
            gif: { count: 47, path: 'assets/images/mahiru/gallery/gifs', ext: 'gif', prefix: 'Mahiru (' }
        },
        terminalWelcome: `<p>Welcome to Amane's terminal.</p><p>Confused? Type 'help' and press Enter to get started!</p>`,
        prompt: "amane@shiina:~$",
        commands: {
            help: `Available commands:\n  info      - Displays my profile information.\n  projects  - Lists my major projects.\n  mahiru    - A word from the angel.\n  amane     - Amane's thoughts.\n  clear     - Clears the terminal screen.`,
            info: `info command output for Mahiru...`, // Có thể là HTML
            projects: `projects command output...`,
            mahiru: `"Đừng lo, từ giờ tớ sẽ ở đây để chăm sóc cho cậu, Amane."`,
            amane: `"Cô ấy... thật sự là một thiên thần."`,
        },
        footerQuote: "“Just like cooking, every line of code needs a little love to be perfect.”"
    },

    // --- NHÂN VẬT 2: ELYSIA (Ví dụ) ---
    elysia: {
        name: "Elysia",
        layout: "_layouts/tech_terminal.html", // <-- Dùng layout khác
        
        // Dữ liệu cho layout tech_terminal
        terminalWelcome: `Web bash by Elysia, version 1.0.3-release.\nThese shell commands are defined internally. Type 'help' to see this list.`,
        prompt: "elysia@elysia:~$",
        commands: {
            help: `Available commands:\n  info      - Get info about me (read if cute :3).\n  projects  - Display a list of my major projects.\n  play      - Play a cool soundtrack.\n  clear     - Clears the terminal screen.`,
            info: `info for Elysia... I love programming and have a few small projects!`,
            projects: `Elysia's projects...`,
            play: `Now playing: TruE (Ed Ver.) · HOYO-MiX...`
        }
        // Layout này không có slideshow hay gallery nên không cần định nghĩa
    }
};