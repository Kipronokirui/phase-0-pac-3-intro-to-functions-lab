
function shout(string) {
    return string.toUpperCase();
}
function shout(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase())
    return string
}
function logWhisper(string){
    return console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string){
    const dinner = "Let's have dinner together!"
    if (string.toUpperCase == string){
        return "YES INDEED!"
    } else if (string.toLowerCase == string){
        return "I can't hear you!"
    } else if (string == dinner){
        return "I would love to!"
    } else{
        return "TEST FAILED"
    }
}