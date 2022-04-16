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

