const button = document.getElementById('button1')

function buttonClick() {
    axios.get("https://sv443.net/jokeapi/v2/joke/Any?amount=4")
        .then(response => {
            for (let i=0; i<response.data.length; i++) {

                const div = document.createElement('div')
                document.getElementById('main').appendChild(div) 

                const h2 = document.createElement('h2')
                h2.textContent = response.data[i].name
                div.appendChild(h2)

                const p1 = document.createElement('p')
                p1.textContent = 'Error: ' + response.data[i].error
                div.appendChild(p1)

                const p2 = document.createElement('p')
                p2.textContent = 'Category: ' + response.data[i].category
                div.appendChild(p2)

                const p3 = document.createElement('p')
                p3.textContent = 'Type: ' + response.data[i].type
                div.appendChild(p3)

                const p4 = document.createElement('p')
                p4.textContent = 'Joke: ' + response.data[i].joke
                div.appendChild(p4)

                const p5 = document.createElement('p')
                p5.textContent = 'Flags: ' + response.data[i].flags
                div.appendChild(p5)

                const p6 = document.createElement('p')
                p6.textContent = 'Id: ' + response.data[i].id
                div.appendChild(p6)

                const p7 = document.createElement('p')
                p6.textContent = 'Language: ' + response.data[i].lang
                div.appendChild(p7)
            }
        })
     
        .catch()
}


button.addEventListener('click', buttonClick)