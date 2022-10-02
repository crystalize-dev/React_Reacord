import logo1 from "../img/icon1.png"
import logo2 from "../img/icon2.png"
import logo3 from "../img/icon3.png"
import logo4 from "../img/icon4.png"

const messages = ["Hello", "How are you doing?", 'im fine, ty']

const group1 = {
    logo: logo1,
    name: "1",
    mainHall: [{chat: "chat", messages: messages}, {chat: "announcements", messages: messages}],
    voiceChat: ["general", "For admins"]
}

const group2 = {
    logo: logo2,
    name: "2",
    mainHall: [{chat: "chat", messages: messages}, {chat: "memes", messages: messages}],
    voiceChat: ["general", "Memes discussion"]
}

const group3 = {
    logo: logo3,
    name: "3",
    mainHall: [{chat: "chat", messages: messages}, {chat: "games", messages: messages}],
    voiceChat: ["general", "Gaming together"]
}

const group4 = {
    logo: logo4,
    name: "4",
    mainHall: [{chat: "chat", messages: messages}, {chat: "pictures", messages: messages}],
    voiceChat: ["general", "films"]
}

export const groups = [group1, group2, group3, group4]