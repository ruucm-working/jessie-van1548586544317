import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'

// Define type of property
interface Props {
  nextStage: number
  onClick: any
}

export class StageButtonWrap extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    children: null,
    nextStage: 1,
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    nextStage: { type: ControlType.Number, title: 'Next Stage' },
  }

  render() {
    const { nextStage, onClick } = this.props
    return (
      <div
        onClick={() => onClick(nextStage)}
        style={{
          cursor: 'pointer',
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
