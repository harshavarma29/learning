import React from 'react';
import './styles/optimization.css';

const Optimize = () => {
    const points = ["Basically we'll teach you step by step what you need to do", "In order to develop your Company and reach new heights", "You will have our software Team support 24 x 7"];
    return <div className="width grid">
                <div className="left">
                    <img className="opti-image" src={require('../images/remotely.svg')}/>
                </div>
                <div className="right">
                    <div className="opt-title">
                        Search For Optimization Wherever Is Possible
                    </div>
                    <div className="points">
                        {
                            points.map((point, id) => {
                                return <div className="m-p">
                                <div className=""><img className="check m-check" src={require("../logos/check.svg")} alt="check"/></div>
                                <div className="m-c point o-point">{point}</div>
                            </div>
                            })
                        }
                    </div>    
                </div>
            </div>
}

export default React.memo(Optimize);