const dodger = document.querySelector("#dodger")
dodger.style.backgroundColor = "#FF69B4"

 document.addEventListener("keydown", function(e) {
    console.log(e)
})

function moveDodgerLeft () {
    const leftNum = dodger.style.left.replace("px", "")
    const left = parseInt(leftNum, 10)
    if (left > 0) {
    dodger.style.left = `${left -1}px`
    }
}

function moveDodgerRight () {
    const rightNum = dodger.style.left.replace("px", "")
    const right = parseInt(rightNum, 10)
    if (right < 360) {
        dodger.style.left = `${right +1}px`
    }
}
 
function moveDodgerUp () {
    const topNum = dodger.style.bottom.replace("px", "")
    const top = parseInt(topNum, 10)
    if (top < 380) {
        dodger.style.bottom = `${top + 1}px`
    }
}

function moveDodgerDown () {
    const botNum = dodger.style.bottom.replace("px", "")
    const bot = parseInt(botNum, 10)
    if (bot > 0) {
        dodger.style.bottom = `${bot - 1}px`
    }
}


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    } else if (e.key === "ArrowRight") {
        moveDodgerRight()
    }else if (e.key === "ArrowUp") {
        moveDodgerUp()
    }else if (e.key === "ArrowDown") {
        moveDodgerDown()
    }
})



