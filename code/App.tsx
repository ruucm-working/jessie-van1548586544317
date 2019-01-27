import { Data, animate, Override, Animatable } from 'framer'
import { log } from 'ruucm-util'
import { stages, nav, portfolioItem, menuItem } from './datas'
import {
  showStages,
  showNav,
  pullNavOnTop,
  hideNav,
  showPortfolioItemOverlay,
  hidePortfolioItemOverlay,
  showMenuItemOverlay,
  hideMenuItemOverlay,
} from './animate'

window.log = log

export const Stages: Override = props => {
  showStages()
  return {
    top: stages.top,
    opacity: stages.opacity,
    currentPage: stages.currentStage,
    animateCurrentPageUpdate: false,
    onMouseWheel(e) {
      if (e.delta.y > 0) hideNav()
      if (e.delta.y < 0) {
        if (e.devicePoint.y < screen.height / 2) {
          log('pullNavOnTop!')
          pullNavOnTop()
        } else {
          log('showNav!')
          showNav()
        }
      }
    },
  }
}

export const LoadingSpinner: Override = props => {
  return {
    opacity: stages.loadingOpacity,
    style: {
      position: 'fixed',
      top: '50%',
    },
  }
}

export const StageButtons: Override = props => {
  return {
    onClick(nextStage: number) {
      log('go to next stage', nextStage)

      stages.currentStage = nextStage
      document.documentElement.scrollTop = document.documentElement.scrollTop = 0
    },
  }
}

export const Nav: Override = props => {
  return {
    top: nav.top,
    style: {
      position: 'fixed',
      top: '40px',
    },
  }
}

export const PortfolioItem: Override = props => {
  let currentIndex = props.children[0].props.children[0].props.currentIndex

  return {
    onMouseEnter: () => showPortfolioItemOverlay(currentIndex),
    onMouseLeave: () => hidePortfolioItemOverlay(currentIndex),
    style: {
      cursor: 'pointer',
    },
  }
}

export const PortfolioItemOverlay: Override = props => {
  let currentIndex = props.children[0].props.children[0].props.currentIndex

  return {
    opacity: portfolioItem[currentIndex].overlayOpacity,
  }
}

export const PortfolioItemCaption: Override = props => {
  let currentIndex = props.children[0].props.children[0].props.currentIndex

  return {
    opacity: portfolioItem[currentIndex].captionOpacity,
    right: portfolioItem[currentIndex].captionRight,
  }
}

export const MenuItem: Override = props => {
  let currentIndex = props.children[0].props.children[0].props.currentIndex
  return {
    onMouseEnter: () => showMenuItemOverlay(currentIndex),
    onMouseLeave: () => hideMenuItemOverlay(currentIndex),
  }
}

export const MenuItemOverlay: Override = props => {
  let currentIndex = props.children[0].props.children[0].props.currentIndex
  return {
    opacity: menuItem[currentIndex].overlayOpacity,
  }
}

export const MenuItemData: Override = props => {
  let currentIndex = props.children[0].props.children[0].props.currentIndex
  return {
    opacity: menuItem[currentIndex].dataOpacity,
    scale: menuItem[currentIndex].dataScale,
    style: {
      position: 'fixed',
      top: '0',
    },
  }
}
