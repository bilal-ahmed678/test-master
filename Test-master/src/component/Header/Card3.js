import React, { Component } from 'react'
import Ds from "../asset/ds.jpg"
import Fd from "../asset/fd.jpg"
import Jkl from "../asset/jkl.jpg"
import Hjk from "../asset/hjk.jpg"
import Clock from "../asset/Clock.jpg"
import Fbds from "../asset/fbds.jpg"
import "./Card3.css"

class Card3 extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-2 col-sm-6 bsdf ">
                            <div className="card">
                                <img src={Ds} className="card-img-top" alt="..." />
                                <div className="card-body ght">
                                    <h5 className="house">$447.37</h5>
                                    <h8>Ruthi4263</h8>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 bsdf">
                            <div className="card">
                                <img src={Jkl} className="card-img-top" alt="..." />
                                <div className="card-body ght">
                                    <h5 className="house">$400</h5>
                                    <h8>Television</h8>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 bsdf">
                            <div className="card">
                                <img src={Fd} className="card-img-top" alt="..." />
                                <div className="card-body ght">
                                    <h5 className="house">$5.38</h5>
                                    <h8>Kingrich39</h8>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 bsdf">
                            <div className="card">
                                <img src={Hjk} class="card-img-top" alt="..." />
                                <div className="card-body ght">
                                    <h5 className="house">$4.13</h5>
                                    <h8>pobgammer</h8>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 bsdf">
                            <div className="card">
                                <img src={Clock} class="card-img-top" alt="..." />
                                <div className="card-body ght">
                                    <h5 className="house">$1.16</h5>
                                    <h8>boriself</h8>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 bsdf">
                            <div className="card">
                                <img src={Fbds} className="card-img-top" alt="..." />
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

export default Card3;