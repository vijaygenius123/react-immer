import produce from "immer";
import {IGiftState} from "./@types/Gift.type";
import {allUsers, getCurrentUser} from "./users";
import defaultGifts from './assets/gifts.json'

export function addGift(state: IGiftState, id: string, description: string, image: string): IGiftState {
    return produce(state, draft => {
            draft.gifts.push({
                id,
                description,
                image,
                reservedBy: undefined
            })
        }
    )
}

export function toggleReservation(state: IGiftState, giftId: string): IGiftState {

    return produce(state, draft => {
        const gift = draft.gifts.find(gift => gift.id === giftId)
        if (gift)
            gift.reservedBy =
                gift.reservedBy === undefined ? state.currentUser.id : gift.reservedBy === state.currentUser.id ? undefined : gift.reservedBy
    })
}

export function getInitialState(){
    return {
        users: allUsers,
        currentUser: getCurrentUser(),
        gifts: defaultGifts
    }
}
