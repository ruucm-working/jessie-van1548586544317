import { animate } from 'framer'
import { portfolioItem } from '../datas'

const showPortfolioItemOverlay = async currentIndex => {
  animate.ease(portfolioItem[currentIndex].overlayOpacity, 1, {
    duration: 0.4,
  })

  animate.ease(portfolioItem[currentIndex].captionOpacity, 1, {
    duration: 0.4,
  })
  portfolioItem[currentIndex].captionRight.set(-50)
  animate.ease(portfolioItem[currentIndex].captionRight, 0, {
    duration: 0.4,
  })
}

export default showPortfolioItemOverlay
