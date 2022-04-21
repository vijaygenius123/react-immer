import {addGift, toggleReservation} from "./gift";
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

describe("Reserving an unreserved gift", () => {
    const nextState = toggleReservation(initialState, "egghead_subscription")

    test("correctly stores the reservedBy", () => {
        expect(nextState.gifts[1].reservedBy).toBe(1)
    })

    test("Didnt modify the original state", () => {
        expect(initialState.gifts[1].reservedBy).toBe(undefined)
    })

    test("does structurally share unchanged parts of the state tree", () => {
        expect(nextState).not.toBe(initialState)
        expect(nextState.gifts[1]).not.toBe(initialState.gifts[1])
        expect(nextState.gifts[0]).toBe(initialState.gifts[0])
    })

})

describe("Reserving an already reserved gift", () => {
    const nextState = toggleReservation(initialState, "immer_license")

    test("preserves stored reservedBy", () => {
        expect(nextState.gifts[0].reservedBy).toBe(2)
    })
})

