import { animate } from 'framer'
import { portfolioItem } from '../datas'

const hidePortfolioItemOverlay = async currentIndex => {
  animate.ease(portfolioItem[currentIndex].overlayOpacity, 0, {
    duration: 0.4,
  })

  animate.ease(portfolioItem[currentIndex].captionOpacity, 0, {
    duration: 0.4,
  })
  animate.ease(portfolioItem[currentIndex].captionRight, -50, {
    duration: 0.4,
  })
}

export default hidePortfolioItemOverlay
