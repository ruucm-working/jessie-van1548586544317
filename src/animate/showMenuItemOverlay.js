import { animate } from 'framer'
import { menuItem, stages } from '../datas'

const showMenuItemOverlay = async currentIndex => {
  // hover effect
  animate.ease(menuItem[currentIndex].overlayOpacity, 1, {
    duration: 0.1,
  })

  // dim stages content
  animate.ease(stages.opacity, 0.2, {
    duration: 0.1,
  })

  // show menuItemData
  menuItem[currentIndex].dataScale.set(1)
  animate.ease(menuItem[currentIndex].dataOpacity, 1, {
    duration: 0.1,
  })
}

export default showMenuItemOverlay
