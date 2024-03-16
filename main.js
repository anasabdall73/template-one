let icon = document.getElementById("icon")
let span2 = document.getElementById("span2")
let ul = document.getElementById("ul")


icon.onclick = () => {
    ul.style.display = "block"
    ul.style.transition = "0.3s"
    ul.style.zIndex = "1"
}

icon.ondblclick = () => {
    ul.style.display = "none"
}

icon.onmouseenter = () => {
    span2.style.width = "100%"
    span2.style.transition = "0.3s"
}

icon.onmouseleave = () => {
    span2.style.width = "60%"
}

a.onmouseenter = () => {
    a.style.paddingLeft = "30px"
    a.style.transition = "0.3s"
}

a.onmouseleave = () => {
    a.style.paddingLeft = "15px"
    a.style.transition = "0.3s"
}