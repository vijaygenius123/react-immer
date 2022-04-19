import {getInitialState} from "../gift";
import Gift from "./Gift";

function GiftList() {
    const state = getInitialState()
    const {users, currentUser, gifts} = state

    return (<>
            <h1 className={"text-4xl"}>Hi, {currentUser?.name}</h1>
            <div className={"flex"}>
                <button
                    className={"inline-block px-4 py-1 outline-0 text-white text-md bg-blue-600 hover:bg-blue-400 rounded-sm items-center"}>Add
                </button>
            </div>
            <div className={""}>
                {
                    gifts.map(gift => <Gift key={gift.id} gift={gift} users={users} currentUser={currentUser}/>)
                }
            </div>
        </>
    )
}

export default GiftList
