import React, {PureComponent} from 'react';

class form extends PureComponent {
    constructor() {
        super();

        this.state = {

        }
    }

    getChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return <React.Fragment>
                    <input name="name" ></input>
                    <input email="email"></input>
                    <input phone="phone"></input>
                    <select >
                        <option>
                           Web development 
                        </option>
                        <option>
                           App development 
                        </option>
                    </select>
                </React.Fragment>
    }
}

export default React.memo(form);