import logo1 from "../img/icon1.png"
import logo2 from "../img/icon2.png"
import logo3 from "../img/icon3.png"
import logo4 from "../img/icon4.png"



const user1 = {
    name: "Carl",
    role: "admin",
    status: "online",
    color: "teal"
}
const user2 = {
    name: "Charlie",
    role: "user",
    status: "offline",
    color: "navy"
}
const user3 = {
    name: "Mark",
    role: "user",
    status: "online",
    color: "crimson"
}
const user4 = {
    name: "Timur",
    role: "user",
    status: "online",
    color: "darkmagenta"
}
const user5 = {
    name: "Kate",
    role: "user",
    status: "online",
    color: "violet"
}
export const me = {
    name: "Me",
    role: "user",
    status: "online",
    color: "orange"
}

export const users =[user1, user2, user3, user4, user5, me]


const group1 = {
    id: "1",
    logo: logo1,
    name: "Chat1",
    mainHall: [{chat: "chat", messages: [{message: "Hello", sender: user1.name, color: user1.color}, {message: "How are you doing?", sender: user2.name, color: user2.color}, {message: 'im fine, ty', sender: user3.name, color: user3.color}], description: "A place for friends to talk"},
               {chat: "announcements", messages: [{message: "Hello", sender: user1.name, color: user1.color}, {message: "How are you doing?", sender: user2.name, color: user2.color}, {message: 'im fine, ty', sender: user3.name, color: user3.color}], description: "Here you will see news"}],
    voiceChat: [{voice: "general"}, {voice: "For admins"}]
}

const group2 = {
    id: "2",
    logo: logo2,
    name: "Chat2",
    mainHall: [{chat: "chat", messages:[{message: "Hello", sender: user1.name, color: user1.color}, {message: "How are you doing?", sender: user2.name, color: user2.color}, {message: 'im fine, ty', sender: user3.name, color: user3.color}], description: "A place for friends to talk"},
               {chat: "memes", messages: [{message: "Hello", sender: user1.name, color: user1.color}, {message: "How are you doing?", sender: user2.name, color: user2.color}, {message: 'im fine, ty', sender: user3.name, color: user3.color}], description: "Here you can post your memes"}],
    voiceChat: [{voice: "general"}, {voice: "Memes discussion"}]
}

const group3 = {
    id: "3",
    logo: logo3,
    name: "Chat3",
    mainHall: [{chat: "chat", messages: [{message: "Hello", sender: user1.name, color: user1.color}, {message: "How are you doing?", sender: user2.name, color: user2.color}, {message: 'im fine, ty', sender: user3.name, color: user3.color}], description: "A place for friends to talk"},
               {chat: "games", messages: [{message: "Hello", sender: user1.name, color: user1.color}, {message: "How are you doing?", sender: user2.name, color: user2.color}, {message: 'im fine, ty', sender: user3.name, color: user3.color}], description: "Here you can discuss games and stuff"}],
    voiceChat: [{voice: "general"}, {voice: "Gaming together"}]
}

const group4 = {
    id: "4",
    logo: logo4,
    name: "Chat4",
    mainHall: [{chat: "chat", messages: [{message: "Hello", sender: user1.name, color: user1.color}, {message: "How are you doing?", sender: user2.name, color: user2.color}, {message: 'im fine, ty', sender: user3.name, color: user3.color}], description: "A place for friends to talk"},
               {chat: "pictures", messages: [{message: "Hello", sender: user1.name, color: user1.color}, {message: "How are you doing?", sender: user2.name, color: user2.color}, {message: 'im fine, ty', sender: user3.name, color: user3.color}], description: "Here you can post pictures that you want"}],
    voiceChat: [{voice: "general"}, {voice: "films"}]
}

export const groups1 = [group1, group2, group3, group4]