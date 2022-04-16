export interface IUser {
    id: number,
    name: string
}

export interface IGift {
    id: string,
    description: string,
    image: string,
    reservedBy: number | undefined
}

export interface IGiftState {
    users: IUser[],
    currentUser: IUser,
    gifts: IGift[]
}
