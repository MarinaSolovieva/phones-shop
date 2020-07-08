import React from "react";
import {connect} from "react-redux";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }

        this.handleSubmit = handleSubmit.bind(this)


        function handleSubmit (event) {
            event.preventDefault()
            this.props.searchPhone(this.state.value)
        }



        const handleChange = event => {
            this.setState({
                value: event.target.value
            })
        }
    }

    render() {
        return (
            <div className="well">
                <h3 className="lead">Quick shop</h3>
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn btn-default ">
                          <i className="fa fa-search"></i>
                        </button>
                    </span>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    searchPhone
}

export default connect(null, mapDispatchToProps) (Search)