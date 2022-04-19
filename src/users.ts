import {IUser} from "./@types/Gift.type";

export const allUsers = [
    "🐶",
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
    id: idx,
    name: emoji
}))

export function getCurrentUser() {
    if (typeof sessionStorage === 'undefined') return null
    const currentUserId: IUser['id'] = parseInt(sessionStorage.getItem("user") || Math.round(Math.random() * (allUsers.length - 1)).toString(), 10)
    sessionStorage.setItem("users", currentUserId.toString())
    return allUsers[currentUserId]
}
