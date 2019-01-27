import { animate } from 'framer'
import { menuItem, stages } from '../datas'

const hideMenuItemOverlay = async currentIndex => {
  // hover effect
  animate.ease(menuItem[currentIndex].overlayOpacity, 0, {
    duration: 0.1,
  })

  // dim stages content
  animate.ease(stages.opacity, 1, {
    duration: 0.1,
  })

  // hide menuItemData
  menuItem[currentIndex].dataScale.set(0)
  animate.ease(menuItem[currentIndex].dataOpacity, 0, {
    duration: 0.1,
  })
}

export default hideMenuItemOverlay
