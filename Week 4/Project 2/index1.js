const button = document.getElementById('button1')

function buttonClick() {
    axios.get("https://opentdb.com/api.php?amount=10")
        .then(response => {
            for (let i=0; i<response.data.length; i++) {

                const div = document.createElement('div')
                document.getElementById('main').appendChild(div) 

                const h2 = document.createElement('h2')
                h2.textContent = response.data[i].name
                div.appendChild(h2)

                const p1 = document.createElement('p')
                p1.textContent = 'Category: ' + response.data[i].category
                div.appendChild(p1)

                const p2 = document.createElement('p')
                p2.textContent = 'Type: ' + response.data[i].type
                div.appendChild(p2)

                const p3 = document.createElement('p')
                p3.textContent = 'Difficulty: ' + response.data[i].diffiuclty
                div.appendChild(p3)

                const p4 = document.createElement('p')
                p4.textContent = 'Question: ' + response.data[i].question
                div.appendChild(p4)

                const p5 = document.createElement('p')
                p5.textContent = 'Correct Answer: ' + response.data[i].correct_answer
                div.appendChild(p5)

                const p6 = document.createElement('p')
                p6.textContent = 'Incorrect Answers: ' + response.data[i].incorrect_answers
                div.appendChild(p6)

            }
        })
     
        .catch()
}

button.addEventListener('click', buttonClick)