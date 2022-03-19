const xhr = new XMLHttpRequest()

xhr.open("GET", " https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        pokemonList(data.objects[0].pokemon)
    }
}

function pokemonList(arr) {
    for (let i = 0; i < arr.length; i++) {

        let newPoke = document.createElement('h2')
        newPoke.textContent = arr[i].name
        document.body.appendChild(newPoke)

        let newP = document.createElement('p')
        newP.textContent = arr[i].resource_uri
        document.body.appendChild(newP)
    }
}