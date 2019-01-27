import { animate } from 'framer'
import { nav } from '../datas'

const hideNav = async () => {
  animate.easeOut(nav.top, -200, {
    duration: 0.3,
  })
}

export default hideNav
