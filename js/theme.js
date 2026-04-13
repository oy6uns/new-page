document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('darkModeToggle');
  const html = document.documentElement;

  // 초기 상태 설정
  const isDarkMode = localStorage.getItem('theme') === 'dark';
  toggle.checked = isDarkMode;

  toggle.addEventListener('change', function() {
    const newTheme = this.checked ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
