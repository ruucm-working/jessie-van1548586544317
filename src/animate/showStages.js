import { animate } from 'framer'
import { stages } from '../datas'
import { sleep } from '../utils'

const showStages = async () => {
  await sleep(2)
  animate.easeOut(stages.loadingOpacity, 0, {
    duration: 0.4,
  })

  await sleep(1)

  animate.easeOut(stages.opacity, 1, {
    duration: 0.2,
  })
  // stages.top.set(-100)
  animate.easeOut(stages.top, 0, {
    duration: 0.2,
  })
}

export default showStages
