import {IUser} from "./@types/Gift.type";

export const allUsers = [
    "🐶",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
    "🐻",
    "🐨",
    "🐯",
    "🦁",
    "🐮",
    "🐷",
    "🐸",
    "🐵",
    "🐔",
    "🐧",
    "🐦",
    "🐤",
    "🐣",
    "🦆",
    "🦅",
    "🦉",
    "🦇",
    "🐺",
    "🐗",
    "🐴",
    "🦄",
    "🐝",
].map((emoji, idx) => ({
    id: idx + 1,
    name: emoji
}))

export function getCurrentUser() {
    if (typeof sessionStorage === 'undefined') return {id: 0, name: "Vijay"}
    const currentUserId: IUser['id'] = parseInt(sessionStorage.getItem("user") || Math.round(Math.random() * (allUsers.length - 1)).toString(), 10)
    sessionStorage.setItem("user", currentUserId.toString())
    return allUsers[currentUserId]
}
