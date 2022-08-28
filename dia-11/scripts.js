const themeDark = 'theme-dark'
const themeLight = 'theme-light'

function getTheme() {
  const theme = localStorage.getItem('theme')

  if (theme === 'null') {
    return themeDark
  }

  return theme
}

function setSlider(themeMode) {
  const checked = themeMode === themeDark ? false : true
  document.getElementById('slider').checked = checked
}

function setTheme(themeMode) {
  localStorage.setItem('theme', themeMode)
  document.documentElement.className = themeMode
}

function toggleTheme() {
  console.log('toggle theme')
  const theme = getTheme()

  if (theme === themeDark) {
    setTheme(themeLight)
    return
  }

  setTheme(themeDark)
}

window.onload = function () {
  const theme = getTheme()
  setTheme(theme)
  setSlider(theme)

  particlesJS.load('particles-js', '../assets/json/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
}
