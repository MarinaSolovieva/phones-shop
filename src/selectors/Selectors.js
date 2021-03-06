import * as R from "ramda";

export const getPhoneById = (state, id) => R.prop(id, state.phones)

export const getPhones = state => {
const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids)
    return phones
}

export const getRenderedPhonesLength = state => R.length(state.phonesPage.ids)

export const getTotalBasketCount = state => state.basket.length

export const  getTotalPrice = state => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck("price"),
        R.map(id => getPhoneById (state, id), )
    )(state.basket)
    return totalPrice
};