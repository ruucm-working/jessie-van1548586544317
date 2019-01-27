import { Animatable, Data } from 'framer'

const top = Animatable(-100)
const opacity = Animatable(0)
const loadingOpacity = Animatable(1)

export default Data({
  top,
  opacity,
  currentStage: 0,
  loadingOpacity,
})
