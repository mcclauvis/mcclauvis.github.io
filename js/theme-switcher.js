(function() {
  const themeSwitcherButton = document.getElementById('theme-switcher');
  if (!themeSwitcherButton) {
    console.error('Theme switcher button not found');
    return;
  }
  const rougeStyleLink = document.getElementById('rouge-style'); // New line

  const THEME_KEY = 'theme-preference';
  let currentTheme = localStorage.getItem(THEME_KEY);

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      themeSwitcherButton.textContent = 'Light Mode';
      if (rougeStyleLink) { // New if block
        rougeStyleLink.href = '/css/rouge/base16.dark.css';
      }
    } else {
      document.body.classList.remove('dark-mode');
      themeSwitcherButton.textContent = 'Dark Mode';
      if (rougeStyleLink) { // New if block
        rougeStyleLink.href = '/css/rouge/github.css';
      }
    }
  }

  if (currentTheme) {
    applyTheme(currentTheme);
  } else {
    currentTheme = 'light'; // Defaulting to light
    applyTheme(currentTheme);
  }

  themeSwitcherButton.addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
      currentTheme = 'light';
    } else {
      currentTheme = 'dark';
    }
    localStorage.setItem(THEME_KEY, currentTheme);
    applyTheme(currentTheme);
  });

})();
