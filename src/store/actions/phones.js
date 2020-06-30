import {
    FETCH_PHONES_FAILURE,
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_START,
    LOAD_MORE_PHONES_SUCCESS
} from "./actionsTypes";
import {fetchPhones as fetchPhonesApi} from "../../api";
import {loadMorePhones as loadMorePhonesApi} from "../../api";

export const fetchPhones = () => async dispatch => {
dispatch ({type: FETCH_PHONES_START})
    try {
        const phones = await fetchPhonesApi()
        dispatch({
            type: FETCH_PHONES_SUCCESS,
            payload: phones
        })
    } catch (e) {
      dispatch ({
          type: FETCH_PHONES_FAILURE,
          payload: e,
          error: true
      })
    }
}

export const loadMorePhones = () => async dispatch => {
    const offset = 20
    dispatch ({type: LOAD_MORE_PHONES_START})
    try {
        const phones = await loadMorePhonesApi()
        dispatch({
            type: LOAD_MORE_PHONES_SUCCESS,
            payload: phones
        })
    } catch (e) {
        dispatch ({
            type: FETCH_PHONES_FAILURE,
            payload: e,
            error: true
        })
    }

}