import React, { Component } from 'react'
import Car2 from "../asset/Car2.jpg"
import Lcd from "../asset/Lcd.jpg"
import Watch from "../asset/watch.jpg"
import Miller from "../asset/Miller.jpg"
import Usa from "../asset/Usa.jpg"
import Toy from "../asset/Toy.jpg"
import Jug from "../asset/Jug.jpg"
import Pan from "../asset/Pan.jpg"
import { Link } from 'react-router-dom';
import './cards.css'

class Cards extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-2 col-sm-6 bsdf ">
                            <div className="card">
                                <Link to="/jug">
                                    <p className="par">
                                        Wilson & Miller solid steak knives set
                                    </p>
                                    <img src={Jug} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body ght">
                                    <h5 className="house">$447.37</h5>
                                    <h8>Ruthi4263</h8>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 bsdf">
                            <div className="card">
                                <img src={Pan} className="card-img-top" alt="..." />
                                <div className="card-body ght">
                                    <h5 className="house">$400</h5>
                                    <h8>Television</h8>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 bsdf">
                            <div className="card">
                                <img src={Watch} className="card-img-top" alt="..." />
                                <div className="card-body ght">
                                    <h5 className="house">$5.38</h5>
                                    <h8>Kingrich39</h8>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 bsdf">
                            <div className="card">
                                <img src={Miller} className="card-img-top" alt="..." />
                                <div className="card-body ght">
                                    <h5 className="house">$4.13</h5>
                                    <h8>pobgammer</h8>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 bsdf">
                            <div className="card">
                                <img src={Usa} className="card-img-top" alt="..." />
                                <div className="card-body ght">
                                    <h5 className="house">$1.16</h5>
                                    <h8>boriself</h8>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 bsdf">
                            <div className="card">
                                <img src={Toy} className="card-img-top" alt="..." />
                                <div className="card-body ght">
                                    <h5 className="house">$5.67</h5>
                                    <h8>jomana</h8>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default Cards