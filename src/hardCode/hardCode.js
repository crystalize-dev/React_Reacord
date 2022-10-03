import logo1 from "../img/icon1.png"
import logo2 from "../img/icon2.png"
import logo3 from "../img/icon3.png"
import logo4 from "../img/icon4.png"



const user1 = {
    name: "Carl",
    role: "admin",
    status: "online"
}
const user2 = {
    name: "Charlie",
    role: "user",
    status: "offline"
}
const user3 = {
    name: "Mark",
    role: "user",
    status: "online"
}
const user4 = {
    name: "Timur",
    role: "user",
    status: "online"
}
const user5 = {
    name: "Kate",
    role: "user",
    status: "online"
}
const me = {
    name: "Me",
    role: "user",
    status: "online"
}

export const users =[user1, user2, user3, user4, user5, me]


const messages = [{message: "Hello", sender: user1.name}, {message: "How are you doing?", sender: user2.name}, {message: 'im fine, ty', sender: user3.name}]

const group1 = {
    logo: logo1,
    name: "1",
    mainHall: [{chat: "chat", messages: messages, description: "A place for friends to talk"}, {chat: "announcements", messages: messages, description: "Here you will see news"}],
    voiceChat: [{voice: "general"}, {voice: "For admins"}]
}

const group2 = {
    logo: logo2,
    name: "2",
    mainHall: [{chat: "chat", messages: messages, description: "A place for friends to talk"}, {chat: "memes", messages: messages, description: "Here you can post your memes"}],
    voiceChat: [{voice: "general"}, {voice: "Memes discussion"}]
}

const group3 = {
    logo: logo3,
    name: "3",
    mainHall: [{chat: "chat", messages: messages, description: "A place for friends to talk"}, {chat: "games", messages: messages, description: "Here you can discuss games and stuff"}],
    voiceChat: [{voice: "general"}, {voice: "Gaming together"}]
}

const group4 = {
    logo: logo4,
    name: "4",
    mainHall: [{chat: "chat", messages: messages, description: "A place for friends to talk"}, {chat: "pictures", messages: messages, description: "Here you can post pictures that you want"}],
    voiceChat: [{voice: "general"}, {voice: "films"}]
}

export const groups = [group1, group2, group3, group4]