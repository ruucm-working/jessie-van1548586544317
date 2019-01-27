import { animate } from 'framer'
import { nav } from '../datas'

const showNav = async () => {
  animate.easeOut(nav.top, -40, {
    duration: 0.3,
  })
}

export default showNav
