function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('slider');

  const currentTheme = localStorage.getItem('theme') || 'theme-light';
  setTheme(currentTheme);
  slider.checked = currentTheme === 'theme-dark';

  slider.addEventListener('change', toggleTheme);
});