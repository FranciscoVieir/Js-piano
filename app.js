const pianoKeys = document.querySelectorAll('.key');

function playSound(newUrl) {
  new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey, index) => {
  const number = index < 9 ? '0' + (index + 1) : (index + 1)
  const newUrl = "24-piano-keys/key" + number + '.mp3'
  pianoKey.addEventListener('click', () => playSound(newUrl))
})
