import React, {Component} from 'react'
import MainPic from './img/main.jpg'

console.log(MainImage)

class MainImage extends Component {
  render() {
    return (
        <div>
            <img src={MainPic} alt='株式会社SSメイン画像' />
        </div>
    )
  }
}

export default MainImage