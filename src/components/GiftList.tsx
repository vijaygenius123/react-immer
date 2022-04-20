import {getInitialState, toggleReservation} from "../gift";
import Gift from "./Gift";
import {useState} from "react";

function GiftList() {
    const [state, setState] = useState(() => getInitialState())
    const {users, currentUser, gifts} = state

    const handleReserve = (id: string) => {
        setState((state) => toggleReservation(state, id))
    }

    return (<>
            <h1 className={"text-4xl"}>Hi, {currentUser?.name}</h1>
            <div className={"flex"}>
                <button
                    className={"inline-block px-4 py-1 outline-0 text-white text-md bg-blue-600 hover:bg-blue-400 rounded-sm items-center"}>Add
                </button>
            </div>
            <div className={""}>
                {
                    gifts.map(gift => <Gift key={gift.id} gift={gift} users={users} currentUser={currentUser}
                                            handleReserve={handleReserve}/>)
                }
            </div>
        </>
    )
}

export default GiftList
