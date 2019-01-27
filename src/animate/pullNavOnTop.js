import { animate } from 'framer'
import { nav } from '../datas'

const pullNavOnTop = async () => {
  animate.easeOut(nav.top, 0, {
    duration: 0.3,
  })
}

export default pullNavOnTop
