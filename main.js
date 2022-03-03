const title = document.getElementById('title')
const subHeaders = document.getElementsByTagName('h2')
const uniqueHeaders = document.getElementsByClassName('unique')
const header = document.querySelector('#superUnique')
const body = document.getElementsByTagName('body')[0]
const dynamicElem = document.createElement('div')
const input = document.querySelector('#myInput')
const btn = document.getElementById('myBtn')


btn.addEventListener('click', function () {
    const text = input.value
    const post = document.createElement('h1')
    post.innerText = text
    body.append(post)
})



dynamicElem.id = 'myDynamicElem'
dynamicElem.classList.add('dynamic')
body.append(dynamicElem)

