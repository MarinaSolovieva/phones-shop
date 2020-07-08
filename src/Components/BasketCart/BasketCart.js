import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getTotalBasketCount, getTotalPrice} from "../../selectors/Selectors";


const BasketCart = ({totalBasketCount, totalPrice}) => {
    return (
        <div className="cart">
            <div className="dropdown">
                <Link to="/basket"
                      id="dLabel"
                      className="btn btn-inverse btn-lg btn-block "
                >
                    <i className="fa fa-shopping-cart"></i>&nbsp;
                    <span>{totalBasketCount} item(s) - ${totalPrice} </span>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalBasketCount: getTotalBasketCount(state),
        totalPrice: getTotalPrice(state)
    }

}

export default connect(mapStateToProps, null)(BasketCart)