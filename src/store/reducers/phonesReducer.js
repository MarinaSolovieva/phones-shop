import * as R from "ramda"

import {FETCH_PHONE_BY_ID_SUCCESS, FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS} from "../actions/actionsTypes";

const initialState = {}

export default function phonesReducer(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            const newValues = R.indexBy(R.prop("id"), payload)
            return R.merge(state, newValues)
        case LOAD_MORE_PHONES_SUCCESS :
            const moreValues = R.indexBy(R.prop("id"), payload)
            return R.merge(state, moreValues)
        case FETCH_PHONE_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state)
        default :
            return state
    }
}