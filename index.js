console.log('hello fische')

const app = document.querySelector('#app')

const header = document.createElement('header')
const title = document.createElement('h1')

title.innerText = 'QUIZ APP'

header.append(title)

app.append(header)
