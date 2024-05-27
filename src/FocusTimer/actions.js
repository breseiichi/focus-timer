import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'
import * as el from './elements.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()

  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function setPlus() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  if(!state.isRunning && minutes < 60) {
   minutes = minutes + 5
  }
  timer.updateDisplay(minutes, seconds)
    sounds.buttonPressAudio.play()
}

export function setMinus() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  if(!state.isRunning && minutes > 0) {
   minutes = minutes - 5
  }
  timer.updateDisplay(minutes, seconds)
  sounds.buttonPressAudio.play()
}


export function toggleMusicForest() {
  state.isMute = document.documentElement.classList.toggle('music-on')

  
  if(state.isMute) {
    toggleStopSounds()
    sounds.buttonForest.play()
    return
  }
  sounds.buttonForest.pause()
}

export function toggleMusicRain() {
  state.isMute = document.documentElement.classList.toggle('music-on')

  toggleStopSounds()

  if(state.isMute) {
    sounds.buttonRain.play()
    return
  }
  sounds.buttonRain.pause()
}

export function toggleMusicCoffe() {
  state.isMute = document.documentElement.classList.toggle('music-on')

  toggleStopSounds()

  if(state.isMute) {
    sounds.buttonCoffe.play()
    return
  }
  sounds.buttonCoffe.pause()
}

export function toggleMusicFire() {
  state.isMute = document.documentElement.classList.toggle('music-on')

  toggleStopSounds()

  if(state.isMute) {
    sounds.buttonFirePlace.play()
    return
  }
  sounds.buttonFirePlace.pause()
}

export function toggleStopSounds() {
  sounds.buttonRain.pause()
  sounds.buttonCoffe.pause()
  sounds.buttonForest.pause()
  sounds.buttonFirePlace.pause()
}
