import React from "react";
import {IGift, IUser} from "../@types/Gift.type";

interface IGiftProps {
    gift: IGift,
    users: IUser[],
    currentUser: IUser|null
}

const Gift: React.FC<IGiftProps> =
    ({gift, users, currentUser}) => {
        return (
            <div className={"gift"}>
                <img src={gift.image} alt={gift.description}/>
                <div className={"description"}>
                    {gift.description}
                </div>
            </div>
        )

    }

export default Gift
