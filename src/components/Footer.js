import React from 'react';
import './styles/footer.css';

const footer = () => {
    return <div className="foot">
                <div className="footer1">
                    <div className="foot-h">
                        About <span className="mini">Indian customer web services</span>
                    </div>
                    <div className="foot-content point">
                        We're passionate about offering some of the best business growth services for every scale of Companies.
                    </div>
                </div>
                <div className="footer">
                    <div className="foot-h">
                        Important Links
                    </div>
                    <i className="fa fa-square-o" aria-hidden="true"></i>
                    <div className="foot-content1 point">
                        Read our <a className="f-color" href="#">Terms & Conditions, Privacy Policy Refund Policy Blog</a>
                    </div>
                </div>
                <div className="footer">
                    <div className="foot-h">
                        Social media
                    </div>
                    <div className="media">
                        <a className="link" href="#">f</a>
                    </div>
                    <div className="media">
                        <a className="link" href="#">in</a>
                    </div>
                </div>
           </div>
}

export default React.memo(footer);