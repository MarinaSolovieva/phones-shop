import {FETCH_PHONES_SUCCESS} from "../actions/actionsTypes";
import * as R from "ramda";

const initialState = {
    ids: []
};


export default function phonesPageReducer(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            return R.merge(state, {
                ids: R.pluck("id", payload)
            })
        default :
            return state
    }
}