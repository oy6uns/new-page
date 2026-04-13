function setLanguage(lang) {
  window.currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key];
  });

  document.documentElement.lang = lang;
  
  // 토글 상태 업데이트
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.checked = lang === 'en';
  }
}

function handleLanguageToggle(toggle) {
  const lang = toggle.checked ? 'en' : 'ko';
  setLanguage(lang);
}

// 초기 언어 설정
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('language') || 'ko';
  setLanguage(savedLanguage);
});
