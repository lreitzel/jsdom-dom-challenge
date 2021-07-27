const counter = document.getElementById("counter")
setInterval(incTimer, 1000)
function incTimer() {
    const num = parseInt(counter.innerText)
    const newNum = num + 1
    counter.innerText = newNum
}
function decTimer() {
    const num = parseInt(counter.innerText)
    const newNum = num - 1
    counter.innerText = newNum
}

const minus = document.getElementById("minus")
const plus = document.getElementById("plus")

plus.addEventListener("click", incTimer)
minus.addEventListener("click", decTimer)

const likesList = document.getElementsByClassName("likes")
const heart = document.getElementById("heart")

heart.addEventListener("click", handleHeartClick)

function handleHeartClick() {
    const num = counter.innerText
    const likeBullets = Array.from(likesList[0].children)
    if (likeBullets.find(e => e.id === num)) {
        const likeBullet = likeBullets.find(e => e.id === num)
        const currentLikes = likeBullet.dataset.likes
        const newLikes = parseInt(currentLikes) + 1
        likeBullet.dataset.likes = newLikes
        likeBullet.innerText = `${num} has ${newLikes} likes`

    } else {
        const likeBullet = document.createElement("li")
        likeBullet.id = num
        likeBullet.dataset.likes = 1
        likeBullet.innerText = `${num} has ${likeBullet.dataset.likes} likes`
        likesList[0].append(likeBullet)
    }
}

