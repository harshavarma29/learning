import React from 'react';
import content from './content';

const details = ({start, end}) => {
    console.log(start, end)
    var subContent = content.splice(start, end);
    return <React.Fragment>
                {
                    subContent.map((solution, id) => {
                        return <div key={id} className="details">
                                    <img className="logo" src={require(`../logos/${solution.logo}.svg`)}/>
                                    <div className="col2">
                                        <div className="heading row">
                                            {solution.heading}
                                        </div>
                                        <p className="solution-points">
                                            {solution.description}
                                        </p>
                                    </div>
                                </div>
                    })
                }
            </React.Fragment>
}

export default React.memo(details);

/*  <div className="col2">
                                        <div className="heading m-heading row">
                                            {solution.heading}
                                        </div>
                                        <p className="solution-points m-point">
                                            {solution.description}
                                        </p>
                                    </div>*/