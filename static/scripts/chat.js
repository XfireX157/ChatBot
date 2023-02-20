//---------------------------Open Chat---------------------------//
const chatButton = document.getElementsByClassName('collapsible')
const notification = document.querySelector("[data-notification]")

for (let i = 0; i < chatButton.length; i++) {
    const element = chatButton[i]
    element.addEventListener('click', function () {
        const content = this.nextElementSibling

        if (content.style.height) {
            content.style.height = null;
            
            setTimeout(() => {
                notification.style.display = "block"
                getHardResponse("Mais alguma coisa?")
                notificationMessagem()
            }, 6000)
        } else {
            content.style.height = content.scrollHeight + "px";
            notification.style.display = "none"
            document.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    sendButton()
                }
            })
        }
    }
    )
}
//------------------------Time--------------------------//
function getTime() {
    let today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }

    let time = hours + ":" + minutes
    return time
}

let time = getTime()

function firstBotMessage() {
    let message = 'Hello, how can I help you'
    document.getElementById('botStarterMessage').innerHTML = `<p class="botText"><span>` + message + `<strong class="time">${time}</strong></span></p>`

    $("#chat-timestamp").append(time)
    document.getElementById('userInput').scrollIntoView(false)
}

firstBotMessage()

function notificationMessagem() {
    notification.style.display = "block"
    const notificationValue = parseInt(notification.dataset.notification) = 1;
    return notification.dataset.notification = notificationValue.toString()
}

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText)
    let botHtml = `<p class="botText"><span>` + botResponse + `<strong class="time">${time}</strong> </span></p>`
    $("#chatbox").append(botHtml)

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
//----------------------------GetUser--------------------//
function getUserResponse() {
    const userText = $("#textInput").val()

    if (userText == "") {
        userText = "I love Code Palace!"
    }

    const userHtml = `<p class="userText"><span>` + userText + `<strong class="time">${time}</strong> </span></p>`

    $("#textInput").val("")
    $("#chatbox").append(userHtml)

    setTimeout(() => {
        getHardResponse(userText)
    }, 1000)

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getUserResponse()
}

function heartButton() {
    const userHtml = `<p class="userText"><span><i style="color: crimson; font-size: 4rem;" class="fa fa-fw fa-heart"></i></span></p>`
    $("#chatbox").append(userHtml)
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        const botHtml = `<p class="botText"><span><i style="color: crimson; font-size: 4rem;" class="fa fa-fw fa-heart"></i></span></p>`
        $("#chatbox").append(botHtml)
    }, 1000)
}