import {FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS} from "../actions/actionsTypes";
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
        case LOAD_MORE_PHONES_SUCCESS:
            const ids = R.pluck("id", payload)
            return R.merge(state, {
                ids: R.concat(state.ids, ids)
            })
        default :
            return state
    }
}