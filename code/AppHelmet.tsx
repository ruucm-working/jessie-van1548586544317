import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* default background color */
  .__framer-touch-cursor-area {
    background: white !important;
    > div{
      background: white !important;
    }
  }
`

// Define type of property
interface Props {
  mobileFrame: string
}

export class AppHelmet extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    mobileFrame: 'M-Pages',
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    mobileFrame: { type: ControlType.String, title: 'Mobile Frame' },
  }
  componentDidMount() {
    // Redirect to Mobile Frame, if screen width is smaller than 730px
    if (
      screen.width <= 730 &&
      document.location.pathname != '/' + this.props.mobileFrame + '/'
    ) {
      document.location = '/' + this.props.mobileFrame
    }
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Helmet>
          {/* en - Work Sans */}
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,700,800,900"
            rel="stylesheet"
          />

          {/* en - Lora */}
          <link
            href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i"
            rel="stylesheet"
          />
        </Helmet>
      </div>
    )
  }
}
