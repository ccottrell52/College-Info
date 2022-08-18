


fetch('http://universities.hipolabs.com/search?country=United+States')
    .then((response) => response.json())
    .then((data) => {
        console.log(data.length)
        const list = document.querySelector('.row')
        var box = []
        for (let i = 0; i < 8; i++) {
            box[i] = document.createElement("div")
            box[i].className = "box"
            box[i].innerHTML = data[i].name 

            var link = document.createElement("a")
            link.setAttribute('href', data[i].web_pages[0])
            link.innerText = data[i].web_pages[0]
            link.className = "link"

            var button = document.createElement("button")
            button.addEventListener("click", () => handleClick(box[i], data))
            button.innerText = "next"
            button.className ="button"

            list.appendChild(box[i])
            box[i].appendChild(link)
            box[i].appendChild(button)
            
        }
    });



const handleClick = (box, allData) => {

    let random = parseInt(randomNumber(8, 2180))

    box.innerHTML = allData[random].name 

    var link = document.createElement("a")
    link.setAttribute('href', allData[random].web_pages[0])
    link.innerText = allData[random].web_pages[0]
    link.className = "link"

    var button = document.createElement("button")
    button.addEventListener("click", () => handleClick(box, allData))
    button.innerText = "next"
    button.className ="button"

    box.appendChild(link)
    box.appendChild(button)
    
    
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}