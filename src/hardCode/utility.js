function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getRandomColor = () => {
    const color = ["Blue", "BlueViolet", "Aqua", "Aquamarine", "black", "Brown", "DarkOliveGreen","BurlyWood" ,"CadetBlue",
        "Chartreuse","Chocolate" ,"Coral" ,"CornflowerBlue", "Crimson", "DarkGoldenRod", "DarkGreen", "DeepPink",
        "DimGrey", "GreenYellow", "Indigo", "LightCoral", "MediumSpringGreen", "OrangeRed"]

    return color[getRandomIntInclusive(0, color.length)]
}

export const createGroup = (name, color, logo) => {
    return {
        logo: logo,
        color: color,
        name: name,
        mainHall: [{chat: "chat", messages: [], description: "A place for friends to talk"}],
        voiceChat: [{voice: "general"}]
    }
}