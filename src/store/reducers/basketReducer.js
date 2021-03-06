import * as R from "ramda";
import {ADD_PHONE_TO_BASKET} from "../actions/actionsTypes";

const initialState = []

export default function basketReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_PHONE_TO_BASKET:
            return R.append(payload, state)
        default:
            return state
    }
}