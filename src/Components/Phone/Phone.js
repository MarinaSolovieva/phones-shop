import React, {Component} from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import {Link} from "react-router-dom";

import {addPhoneToBasket, fetchPhoneById} from "../../store/actions/phones";
import {getPhoneById} from "../../selectors/Selectors";
import BasketCart from "../BasketCart/BasketCart";


class Phone extends Component {
    componentDidMount() {
        this.props.fetchPhoneById(this.props.match.params.id)
    }

    renderFields() {
        const {phone} = this.props
        const colummnField = R.compose(
            R.toPairs,
            R.pick([
                "cpu",
                "camera",
                "size",
                "weight",
                "display",
                "battery",
                "memory"
            ])
        )(phone)
        return colummnField.map(([key, value]) => (
            <div className="column" key={key}>
                <div className="ab-details-title">
                    <p> {key}</p>
                </div>
                <div className="ab-details-info">
                    {value}
                </div>
            </div>
        ))
    }

    renderContent() {
        const {phone} = this.props
        return (
            <div className="thumbnail">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-thumbnail"
                             src={phone.image}
                             alt={phone.name}
                        />
                    </div>
                    <div className="col-md-6">
                        {this.renderFields()}
                    </div>
                </div>
                <div className="caption-full">
                    <h4 className="float-right">${phone.price}</h4>
                    <h4>{phone.name}</h4>
                    <p>{phone.description}</p>
                </div>
            </div>
        )
    }

    renderSidebar() {
        const {phone, addPhoneToBasket} = this.props
        return (
            <div>
                <p className="lead">
                    Quick shop
                </p>
                <BasketCart/>
                <div className="form-group">
                    <h1>{phone.name}</h1>
                    <h2>{phone.price}</h2>
                </div>
                <Link to="/" className="btn btn-info btn-block">Back to store</Link>
                <button
                    className="btn btn-success btn-block"
                    type="button"
                    onClick={() => addPhoneToBasket(phone.id)}
                > Add to Cart
                </button>
            </div>
        )
    }


    render() {
        const {phone} = this.props
        return (
            <div className="view-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            {phone && this.renderContent()}
                        </div>
                        <div className="col-md-3">
                            {phone && this.renderSidebar()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchPhoneById,
    addPhoneToBasket
}

const mapStateToProps = state => {
    return {
        phone: getPhoneById(state, state.phonePage.id)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Phone)