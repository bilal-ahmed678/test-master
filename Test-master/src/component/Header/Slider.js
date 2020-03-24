import React, { Component } from 'react'
import Gfd from "../asset/gfd.png"
import './Slider.css'



class Slider extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="">
                        <img src={Gfd} alt="SliderLogo" className="slider" />
                           
                    </div>


                </div>

            </div>
        )
    }
}
export default Slider;
