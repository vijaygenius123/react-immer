import {IGiftState} from "./@types/Gift.type";

export function addGift(state: IGiftState, id: string, description: string, image: string): IGiftState {
    return state.gifts.push({
        id,
        description,
        image,
        reservedBy: undefined
    })
}

export function toggleReservation(state: IGiftState, giftId: string): IGiftState {
    let gift = state.gifts.find(gift => gift.id === giftId)
    gift.reservedBy =
        gift && gift.reservedBy === undefined ? state.currentUser.id : gift.reservedBy === state.currentUser.id ? undefined : gift.reservedBy
}
