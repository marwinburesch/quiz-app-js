const app = document.querySelector('#app')

const appContainer = document.createElement('div')
appContainer.classList.add('layout-grid')

const header = document.createElement('header')
const title = document.createElement('h1')
title.innerText = 'QUIZ APP'
header.append(title)

const main = document.createElement('main')
main.innerText = 'main'

const footer = document.createElement('footer')
footer.innerText = 'footer'

appContainer.append(header)
appContainer.append(main)
appContainer.append(footer)

app.append(appContainer)
