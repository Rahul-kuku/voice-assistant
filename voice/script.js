let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon sir")
    }
    else{
        speak("Good evening sir")
    }
}

window.addEventListener('load',()=> {
    wishMe()
})

// joh bolenge woh likhayega

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

//ai mera command lega
function takeCommand(message){
     btn.style.display="flex"
     voice.style.display="none"
    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir,how can i help you")
    }
    if(message.includes("thank you") || message.includes("thankyou advira")){
        speak("welcome sir  ,  what else i can do for you")
    }
    if(message.includes("nothing")){
        speak("ok sir  ,  if you need any help i am here for you")
    }
    else if(message.includes("hu r u") || message.includes("who are you")){
        speak("  i am virtual assistant , i am here to help you")
    }
    else if(message.includes("how r u") || message.includes("how are you")){
        speak("  i am fine , what about you sir")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date") || message.includes("din")){
        let time = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(time)
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("advira","") || message.replace("adwira","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("advira","")}`,"_blank")
    }
}
