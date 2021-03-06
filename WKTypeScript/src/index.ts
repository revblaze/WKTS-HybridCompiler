/**
 * APPEARANCE MODE MANAGER
 */
enum Mode {
  light, dark
}
/**
 * Matches the web interface mode to the system appearance.
 * @wktsignore
 */
const initMatchMode = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { updateColorScheme(Mode.dark) }
  else { updateColorScheme(Mode.light) }  
}
initMatchMode()
/**
 * [Observer] Listen for system appearance change.
 */
window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
  const newColorScheme = e.matches ? "dark" : "light"
  let newMode = Mode.light
  if (newColorScheme === "dark") { newMode = Mode.dark }
  updateColorScheme(newMode)
})
/**
 * Checks the current web interface and updates the color scheme (light/dark mode) to match.
 * @param newMode   The `Mode` to change to
 * @wktsignore
 */
function updateColorScheme(newMode: Mode) {
  let toggleButton = <HTMLElement>document.querySelector("#toggle-dark-mode-desktop")
  let toggleState = toggleButton.getAttribute("title")?.toString()
  let isDarkMode = toggleState?.includes("light mode")
  //console.log(`Mode changed to ${e.matches ? "dark" : "light"} mode`)
  if ((isDarkMode && newMode === Mode.light) || (!isDarkMode && newMode === Mode.dark)) {
    toggleButton?.click()
  }
}