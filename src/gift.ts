import produce from "immer";
import {IGiftState} from "./@types/Gift.type";
import {allUsers, getCurrentUser} from "./users";
import defaultGifts from './assets/gifts.json'

export const addGift = produce((draft: IGiftState, id: string, description: string, image: string) => {
    draft.gifts.push({
        id,
        description,
        image,
        reservedBy: undefined
    })
})

export const toggleReservation = produce((draft: IGiftState, giftId: string) => {
    const gift = draft.gifts.find(gift => gift.id === giftId)
    if (gift)
        gift.reservedBy =
            gift.reservedBy === undefined ? draft.currentUser.id : gift.reservedBy === draft.currentUser.id ? undefined : gift.reservedBy
})

export function getInitialState() {
    return {
        users: allUsers,
        currentUser: getCurrentUser(),
        gifts: defaultGifts
    }
}
