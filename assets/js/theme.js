const themeDark = 'theme-dark'
const themeLight = 'theme-light'
const slider = document.getElementById('slider')

function getTheme() {
  const theme = localStorage.getItem('theme')

  if (theme === 'null') {
    return themeDark
  }

  return theme
}

function setSlider(themeMode) {
  if (slider) {
    const checked = themeMode === themeDark ? false : true
    slider.checked = checked
  }
}

function setTheme(themeMode) {
  localStorage.setItem('theme', themeMode)
  document.documentElement.className = themeMode
}

function toggleTheme() {
  const theme = getTheme()

  if (theme === themeDark) {
    setTheme(themeLight)
    return
  }

  setTheme(themeDark)
}

function initTheme() {
  const theme = getTheme()
  setTheme(theme)
  setSlider(theme)
}
