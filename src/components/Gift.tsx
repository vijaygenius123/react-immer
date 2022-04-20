import React from "react";
import {IGift, IUser} from "../@types/Gift.type";

interface IGiftProps {
    gift: IGift,
    users: IUser[],
    currentUser: IUser | null,
    handleReserve: (id: string) => void
}

const Gift: React.FC<IGiftProps> =
    ({gift, users, currentUser, handleReserve}) => {
        return (
            <div className={"gift"}>
                <img src={gift.image} alt={gift.description} className={
                    "w-1/12 mx-32"
                }/>
                <div className={"text-2xl"}>
                    {gift.description}
                </div>
                <div className={"text-xl"}>
                    {!gift.reservedBy ? (
                        <button onClick={() => handleReserve(gift.id)}>Reserve</button>
                    ) : gift.reservedBy === currentUser?.id ? (
                        <button onClick={() => handleReserve(gift.id)}>Unreserve</button>) : (
                        <span>{users[gift.reservedBy].name}</span>)}
                </div>
            </div>
        )

    }

export default Gift
