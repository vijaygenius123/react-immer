import {addGift} from "./gift";
import {IGiftState} from "./@types/Gift.type";

const initialState:IGiftState = {
    users: [
        {
            id: 1,
            name: "Test User"
        },
        {
            id: 2,
            name: "Someone Else"
        }
    ],
    currentUser: {
        id: 1,
        name: "Test User"
    },
    gifts: [
        {
            id: "immer_license",
            description: "Immer License",
            image: "",
            reservedBy: 2
        },
        {
            id: "egghead_subscription",
            description: "Egghead.io Subscription",
            image: "",
            reservedBy: undefined
        }
    ]
}

describe("Adding gifts", () => {
    const nextState = addGift(initialState, "mug", "Coffee Mug", "Mug Image")

    test("added a gift to the gifts collection", () => {
        expect(nextState.gifts.length).toBe(3)
    })

    test("Didnt modify the original state", () => {
        expect(initialState.gifts.length).toBe(2)
    })
})

