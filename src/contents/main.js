import React, {Component} from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './fotter'
import MainImage from './mainImage'

const Frame = styled.div`
    width: 1000px;
    margin: 0 auto;
`

class Main extends Component {
  render() {
    return (
        <Frame>
            <Header />
            <MainImage />
            <Footer />
        </Frame>
    )
  }
}

export default Main