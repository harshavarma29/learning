import React from 'react';
import './styles/motto.css';

const motto = () => {
    const points = ["Use our staff and our expertise to design and plan your business growth strategy.", "Our enthusiastic team is eager to advise you on the best opportunities that you should could be in the market."]
    return <div className="width">
                <p className="m-heading">Our motto :</p>
                <p className="heading motto">Make the Customer hero of his own story</p>
                <div className="grid">
                    <div className="left">
                        <div className="m-title">Design And Plan Your Business Growth Steps</div>
                        <div className="m-content">
                            {
                                points.map((point, id) => {
                                    return <div className="m-p">
                                                <div className=""><img className="check m-check" src={require("../logos/check.svg")} alt="check"/></div>
                                                <div className="m-c point">{point}</div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="right">
                        <img className="map motto-image" src={require("../images/motto.svg")}/>
                    </div>
                </div>
            </div>
}

export default React.memo(motto);