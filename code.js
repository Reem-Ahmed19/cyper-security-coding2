// --- Data Definitions ---

const FACTS_DATA = [
    {
        en: { title: "Strong Passwords", text: "Use a combination of upper and lower case letters, numbers, and symbols. Avoid using personal information." },
        ar: { title: "كلمات مرور قوية", text: "استخدم مزيجًا من الأحرف الكبيرة والصغيرة والأرقام والرموز. تجنب استخدام المعلومات الشخصية." }
    },
    {
        en: { title: "Multi-Factor Authentication (MFA)", text: "Always enable MFA on your accounts. It adds an extra layer of security beyond just a password." },
        ar: { title: "المصادقة متعددة العوامل (MFA)", text: "قم دائمًا بتمكين المصادقة متعددة العوامل على حساباتك. إنها تضيف طبقة أمان إضافية تتجاوز مجرد كلمة المرور." }
    },
    {
        en: { title: "Phishing Awareness", text: "Be suspicious of unsolicited emails or messages asking for personal information or containing urgent requests." },
        ar: { title: "الوعي بالتصيد الاحتيالي", text: "كن حذرًا من رسائل البريد الإلكتروني أو الرسائل غير المرغوب فيها التي تطلب معلومات شخصية أو تحتوي على طلبات عاجلة." }
    },
    {
        en: { title: "Software Updates", text: "Keep your operating system and applications updated. Updates often include critical security patches." },
        ar: { title: "تحديثات البرامج", text: "حافظ على تحديث نظام التشغيل والتطبيقات الخاصة بك. غالبًا ما تتضمن التحديثات تصحيحات أمنية حرجة." }
    }
];

const GALLERY_IMAGES = [
    { src: 'pic/10 Ways To Avoid Identity Theft Even If You Own A Mac - Work at Home Jobs.jpg', alt: 'Cyber Security Awareness Poster' },
    { src: 'pic/How to spot a Scamming Online Banking Website – Stay Safe Online!.jpg', alt: 'Digital Lock' },
    { src: 'pic/scam_ A fraudulent business scheme; a swindle_.jpg', alt: 'Network Security' },
    { src: 'pic/Schritt für Schritt zur sicheren Web-App_ So funktioniert Transportverschlüsselung mit TLS.jpg', alt: 'Typing on Laptop' },
    { src: 'pic/The difference between cybersecurity and cybercrime, and why it matters.jpg', alt: 'Data Protection Concept' },
    { src: 'pic/The Ivanti Threat Thursday Update for December 14, 2017_ New Hacks and Scams, Just in Time for the Holidays!.jpg', alt: 'Cybersecurity Concept' },
     { src: 'pic/scam_ A fraudulent business scheme; a swindle_.jpg', alt: 'Network Security' },
      { src: 'pic/The difference between cybersecurity and cybercrime, and why it matters.jpg', alt: 'Data Protection Concept' },
      { src: 'pic/How to spot a Scamming Online Banking Website – Stay Safe Online!.jpg', alt: 'Digital Lock' },
    { src: 'pic/How to spot a Scamming Online Banking Website – Stay Safe Online!.jpg', alt: 'Digital Lock' },

];

const SLIDER_CONTENT = [
    { src: 'pic/Secure your treasure.jpg', caption: { en: 'Tip 1: Think before you click.', ar: 'نصيحة 1: فكر قبل أن تنقر.' } },
    { src: 'pic/personal data security and cyber data security online concept illustration.jpg', caption: { en: 'Tip 2: Backup your data regularly.', ar: 'نصيحة 2: قم بعمل نسخة احتياطية لبياناتك بانتظام.' } },
    { src: 'pic/Steal data concept with cyber thief _ Free Vector.jpg', caption: { en: 'Tip 3: Use a VPN on public Wi-Fi.', ar: 'نصيحة 3: استخدم شبكة افتراضية خاصة (VPN) على شبكة Wi-Fi العامة.' } },
];

const RANDOM_TIPS = [
    { en: "Never share your passwords with anyone.", ar: "لا تشارك كلمات المرور الخاصة بك مع أي شخص أبدًا." },
    { en: "Verify the sender's email address before opening attachments.", ar: "تحقق من عنوان البريد الإلكتروني للمرسل قبل فتح المرفقات." },
    { en: "Use a different password for every online service.", ar: "استخدم كلمة مرور مختلفة لكل خدمة عبر الإنترنت." },
    { en: "Log out of public computers after use.", ar: "قم بتسجيل الخروج من أجهزة الكمبيوتر العامة بعد الاستخدام." },
    { en: "Be cautious of too-good-to-be-true offers.", ar: "كن حذرًا من العروض التي تبدو جيدة جدًا لدرجة يصعب تصديقها." }
];

const USERS = [
    { username: 'Ahmed', password: '123', gender: 'male' },
    { username: 'Reem', password: '456', gender: 'female' }
];

// --- Utility Functions ---

/**
 * Gets data from local storage.
 * @param {string} key - The key to retrieve.
 * @returns {Array} The parsed data or an empty array.
 */
function getSavedData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

/**
 * Saves data to local storage.
 * @param {string} key - The key to save under.
 * @param {Array} data - The data array to save.
 */
function saveFormData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Shows a status message (success or error) in the DOM.
 * @param {HTMLElement} element - The element to display the message in.
 * @param {string} message - The message text.
 * @param {string} type - 'success' or 'error'.
 */
function showStatusMsg(element, message, type) {
    element.textContent = message;
    element.className = `status-message ${type}`;
    setTimeout(() => {
        element.textContent = '';
        element.className = 'status-message';
    }, 5000);
}

// --- Core Functionality ---

// 1. Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// 2. Theme Switching
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeSwitch.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('dark-mode');
        themeSwitch.innerHTML = '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem('theme', theme);
}

themeSwitch.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// 3. Localization (AR/EN)
const langSwitch = document.getElementById('lang-switch');
const html = document.documentElement;

function applyLanguage(lang) {
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    langSwitch.textContent = lang === 'ar' ? 'EN' : 'AR';
    langSwitch.dataset.lang = lang;

    document.querySelectorAll('[data-en], [data-ar]').forEach(element => {
        const key = lang === 'ar' ? 'data-ar' : 'data-en';
        element.textContent = element.getAttribute(key);
    });

    // Update form labels and placeholders if needed (for simplicity, we only update textContent)
    // For input placeholders, we would need to add data-placeholder-en/ar attributes.

    localStorage.setItem('language', lang);
}

langSwitch.addEventListener('click', () => {
    const currentLang = langSwitch.dataset.lang;
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(newLang);
});

// Apply saved language on load
const savedLang = localStorage.getItem('language') || 'en';
applyLanguage(savedLang);

// 4. Scroll to Top Function
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 5. Highlight current tap section in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.5 }); // Highlight when 50% of the section is visible

sections.forEach(section => {
    observer.observe(section);
});

// --- Content Generation ---

// 6. Create fact cards from array of objects
function loadFactCards() {
    const container = document.querySelector('.fact-cards-container');
    const currentLang = html.lang;
    container.innerHTML = '';

    FACTS_DATA.forEach(fact => {
        const data = fact[currentLang];
        const card = document.createElement('div');
        card.className = 'fact-card';
        card.innerHTML = `
            <h3 data-en="${fact.en.title}" data-ar="${fact.ar.title}">${data.title}</h3>
            <p data-en="${fact.en.text}" data-ar="${fact.ar.text}">${data.text}</p>
        `;
        container.appendChild(card);
    });
}

// 9. Gallery Page (loadGallery)
function loadGallery() {
    const container = document.querySelector('.gallery-grid');
    container.innerHTML = '';

    GALLERY_IMAGES.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${image.src}" alt="${image.alt}" onclick="openLightbox('${image.src}')">`;
        container.appendChild(item);
    });
}

// 8. Image Slider
let slideIndex = 0;

function loadSlider() {
    const sliderContainer = document.querySelector('.image-slider');
    const currentLang = html.lang;
    sliderContainer.innerHTML = '';

    SLIDER_CONTENT.forEach((slide, index) => {
        const item = document.createElement('div');
        item.className = 'slider-item';
        item.innerHTML = `
            <img src="${slide.src}" alt="Slide ${index + 1}">
            <div class="slider-caption" data-en="${slide.caption.en}" data-ar="${slide.caption.ar}">${slide.caption[currentLang]}</div>
        `;
        sliderContainer.appendChild(item);
    });

    // Add navigation buttons
    sliderContainer.innerHTML += `
        <div class="slider-nav">
            <button class="prev" onclick="plusSlides(-1)">&#10094;</button>
            <button class="next" onclick="plusSlides(1)">&#10095;</button>
        </div>
    `;

    showSlides(slideIndex);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slider-item");
    if (slides.length === 0) return;

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// --- Interactive Features ---

// 7. Read More function
function setupReadMore() {
    const fullTextElement = document.querySelector('.full-text');
    const readMoreBtn = document.querySelector('.read-more-btn');
    const maxLength = 300; // Character limit for truncated text

    if (!fullTextElement || !readMoreBtn) return;

    const fullText = fullTextElement.getAttribute('data-en');
    const truncatedText = fullText.substring(0, maxLength) + '...';

    let isExpanded = false;

    function updateText() {
        const currentLang = html.lang;
        const textKey = currentLang === 'ar' ? 'data-ar' : 'data-en';
        const text = fullTextElement.getAttribute(textKey);
        const truncated = text.substring(0, maxLength) + '...';

        if (isExpanded) {
            fullTextElement.textContent = text;
            readMoreBtn.textContent = currentLang === 'ar' ? 'قراءة أقل' : 'Read Less';
        } else {
            fullTextElement.textContent = truncated;
            readMoreBtn.textContent = currentLang === 'ar' ? 'قراءة المزيد' : 'Read More';
        }
    }

    readMoreBtn.addEventListener('click', () => {
        isExpanded = !isExpanded;
        updateText();
    });

    // Initial setup
    updateText();
}

// 9. Lightbox functions
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close-btn');

window.openLightbox = function(src) {
    lightbox.style.display = 'block';
    lightboxImg.src = src;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// 10. Display random element
const randomTipElement = document.getElementById('random-tip');
const generateRandomTipBtn = document.getElementById('generate-random-tip');

function displayRandomTip() {
    const currentLang = html.lang;
    const randomIndex = Math.floor(Math.random() * RANDOM_TIPS.length);
    const tip = RANDOM_TIPS[randomIndex][currentLang];
    randomTipElement.textContent = tip;
}

generateRandomTipBtn.addEventListener('click', displayRandomTip);

// 11. Contact Us form
const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');

function validateContactForm(name, email, message) {
    if (!name || !email || !message) {
        return { valid: false, message: html.lang === 'ar' ? 'جميع الحقول مطلوبة.' : 'All fields are required.' };
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        return { valid: false, message: html.lang === 'ar' ? 'البريد الإلكتروني غير صالح.' : 'Invalid email format.' };
    }
    return { valid: true };
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const validation = validateContactForm(name, email, message);

    if (validation.valid) {
        const messages = getSavedData('contactMessages');
        const newMessage = {
            name,
            email,
            message,
            date: new Date().toLocaleString()
        };
        messages.push(newMessage);
        saveFormData('contactMessages', messages);

        showStatusMsg(contactStatus, html.lang === 'ar' ? 'تم إرسال رسالتك بنجاح وحفظها محليًا!' : 'Your message was sent successfully and saved locally!', 'success');
        contactForm.reset();
        loadMessagesTable(); // Update the table immediately
    } else {
        showStatusMsg(contactStatus, validation.message, 'error');
    }
});

// 12. Login page
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const loginStatus = document.getElementById('login-status');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    loginError.textContent = ''; // Clear previous error

    const user = USERS.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify({ username: user.username, gender: user.gender }));
        loginForm.reset();
        loginForm.style.display = 'none';
        loginStatus.textContent = html.lang === 'ar' ? `مرحبًا بك، ${user.username}!` : `Welcome, ${user.username}!`;
        loginStatus.classList.add('success');
    } else {
        loginError.textContent = html.lang === 'ar' ? 'خطأ في تسجيل الدخول: اسم المستخدم أو كلمة المرور غير صحيحة.' : 'Login Error: Invalid username or password.';
        localStorage.removeItem('loggedInUser');
        loginStatus.textContent = '';
        loginStatus.classList.remove('success');
    }
});

// 13. Contacts messages in a table
function loadMessagesTable() {
    const messages = getSavedData('contactMessages');
    const tbody = document.querySelector('#messages-table tbody');
    const noMessages = document.getElementById('no-messages');
    tbody.innerHTML = '';

    if (messages.length === 0) {
        noMessages.style.display = 'block';
        document.getElementById('messages-table').style.display = 'none';
        return;
    }

    noMessages.style.display = 'none';
    document.getElementById('messages-table').style.display = 'table';

    messages.forEach(msg => {
        const row = tbody.insertRow();
        row.insertCell().textContent = msg.name;
        row.insertCell().textContent = msg.email;
        row.insertCell().textContent = msg.message;
        row.insertCell().textContent = msg.date;
    });
}

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Initial content loading
    loadFactCards();
    loadGallery();
    loadSlider();
    setupReadMore();
    loadMessagesTable();
    
    // Re-apply language to ensure all dynamically loaded content is translated
    applyLanguage(savedLang);
});

// Re-run content generation functions on language switch to update dynamic content
langSwitch.addEventListener('click', () => {
    loadFactCards();
    loadSlider();
    setupReadMore();
    // Re-display random tip in new language if one is already displayed
    if (randomTipElement.textContent !== generateRandomTipBtn.getAttribute('data-en') && randomTipElement.textContent !== generateRandomTipBtn.getAttribute('data-ar')) {
        displayRandomTip();
    }
});