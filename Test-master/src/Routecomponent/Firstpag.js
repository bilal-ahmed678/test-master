import React, { Component } from 'react'
import Slider from "../component/Header/Slider.js"
import Cards from "../component/Header/cards.js"
import Card2 from "../component/Header/card2.js"
import Card3 from "../component/Header/Card3.js"

class Firstpag extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Cards />
                <Card2 />
                <Card3 />
            </div>
        )
    }
}
export default Firstpag