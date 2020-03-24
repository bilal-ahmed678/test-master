import React, { Component } from 'react'
import Bids from "../asset/Bids.jpg"
import Ring from "../asset/Ring.jpg"
import Your from "../asset/your.jpg"
import Ipad2 from "../asset/Ipad2.jpg"
import Jacket from "../asset/Jacket.jpg"
import Bid from "../asset/Bid.jpg"
import "./Card2.css"



class Card2 extends Component {
    render() {
        return (
            <div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-2 col-sm-6  bsdf ">
                        <div className="card">
                            <img src={Bids} className="card-img-top" alt="..." />
                            <div className="card-body ght">
                                <h5 className = "house">$447.37</h5>
                                <h8>Ruthi4263</h8>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 bsdf">
                        <div className="card">
                            <img src={Ring} className="card-img-top" alt="..." />
                            <div className="card-body ght">
                                <h5 className = "house">$400</h5>
                                <h8>Television</h8>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 bsdf">
                        <div className="card">
                            <img src={Your} className="card-img-top" alt="..." />
                            <div className="card-body ght">
                                <h5 className = "house">$5.38</h5>
                                <h8>Kingrich39</h8>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 bsdf">
                        <div className="card">
                            <img src={Ipad2} className="card-img-top" alt="..." />
                            <div className="card-body ght">
                                <h5 className = "house">$4.13</h5>
                                <h8>pobgammer</h8>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 bsdf">
                        <div className="card">
                            <img src={Jacket} className="card-img-top" alt="..." />
                            <div className="card-body ght">
                               <h5 className = "house">$1.16</h5>
                               <h8>boriself</h8>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 bsdf">
                        <div className="card">
                            <img src={Bid} className="card-img-top" alt="..." />
                            <div className="card-body ght">
                                <h5 className = "house">$5.67</h5>
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
export default Card2
