import {IGiftState} from "./@types/Gift.type";

export function addGift(state: IGiftState, id: string, description: string, image: string): IGiftState {
    return {
        ...state,
        gifts: [
            ...state.gifts,
            {
                id,
                description,
                image,
                reservedBy: undefined
            }
        ]
    }
}

export function toggleReservation(state: IGiftState, giftId: string): IGiftState {
    return {
        ...state,
        gifts: [
            ...state.gifts.map(gift => {
                if (gift.id !== giftId) return gift
                return {
                    ...gift,
                    reservedBy: gift.reservedBy === undefined ? state.currentUser.id : gift.reservedBy === state.currentUser.id ? undefined : gift.reservedBy
                }
            })
        ]
    }
}
