import React, {Component} from "react";
import {connect} from "react-redux";

import {fetchPhoneById} from "../../store/actions/phones";
import {getPhoneById} from "../../selectors/Selectors";



class Phone extends Component {
    componentDidMount() {
        this.props.fetchPhoneById(this.props.match.params.id)
    }

    render() {
        return (
            <div>Phone</div>
        )
    }
}

const mapDispatchToProps = {
    fetchPhoneById
}

const mapStateToProps = state => {
return {
    phone: getPhoneById(state, state.phonePage.id)
}
}
export default connect (mapStateToProps, mapDispatchToProps)(Phone)