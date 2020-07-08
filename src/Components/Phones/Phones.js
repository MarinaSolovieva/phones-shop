import React from "react";
import {connect} from "react-redux";
import * as R from "ramda"
import {Link} from "react-router-dom";

import {addPhoneToBasket, fetchPhones, loadMorePhones} from "../../store/actions/phones";
import {getPhones} from "../../selectors/Selectors";
import App from "../../App";



class Phones extends React.Component {

    componentDidMount() {
        this.props.fetchPhones()
    }

    renderPhone(phone, index) {
        const shortDiscription = `${R.take(60, phone.description)}...`;
        const {addPhoneToBasket} = this.props;
        return (
            <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
                <div className="thumbnail">
                    <img
                        className="img-thumbnail"
                        src={phone.image}
                        alt={phone.name}
                    />
                    <div className="caption">
                        <h4 className="float-right">${phone.price}</h4>
                        <h4>
                            <Link to={`/phones/${phone.id}`}>
                                {phone.name}
                            </Link>
                        </h4>
                        <p>{shortDiscription}</p>
                        <p className="itemButton">
                            <button
                                className="btn btn-primary"
                                onClick={ ()=> addPhoneToBasket(phone.id)}
                            >
                                Buy now!
                            </button>
                            <Link
                                to={`/phones/${phone.id}`}
                                className="btn btn-default"
                            >
                                More info
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const {phones, loadMorePhones} = this.props
        return (
            <App>
                <div>
                    {phones.map((phone, index) => this.renderPhone(phone, index))}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button
                            onClick={loadMorePhones}
                            className=" float-right btn btn-primary"
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </App>
        )
    }
}

const mapDispatchToProps = {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket
}

const mapStateToProps = state => ({
    phones: getPhones(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Phones)