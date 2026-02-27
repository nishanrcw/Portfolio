const themeButton = document.getElementById('themeButton');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

/* Load Saved Theme */
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    themeIcon.className = savedTheme === "dark"
        ? "fas fa-moon"
        : "fas fa-sun";
}

/* Theme Toggle */
themeButton.addEventListener('click', () => {
    let currentTheme = body.getAttribute('data-theme');
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    themeIcon.className = newTheme === 'dark'
        ? 'fas fa-moon'
        : 'fas fa-sun';

    localStorage.setItem("theme", newTheme);
});

// Nepal Time Logic
function updateTime() {
    const options = {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const formatter = new Intl.DateTimeFormat([], options);
    document.getElementById('nepal-time').innerHTML = formatter.format(new Date());
}

setInterval(updateTime, 1000);
updateTime();