import logo1 from "../img/icon1.png"
import logo2 from "../img/icon2.png"
import logo3 from "../img/icon3.png"
import logo4 from "../img/icon4.png"

const messages = ["Hello", "How are you doing?", 'im fine, ty']

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