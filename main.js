const title = document.getElementById('title')
const subHeaders = document.getElementsByTagName('h2')
const uniqueHeaders = document.getElementsByClassName('unique')
const header = document.querySelector('#superUnique')
const body = document.getElementsByTagName('body')[0]
const dynamicElem = document.createElement('div')
const input = document.querySelector('#myInput')
const btn = document.getElementById('myBtn')


const createPost = function () {
    const text = input.value
    const post = document.createElement('h1')
    const hr = document.createElement('hr')
    post.innerText = text
    body.append(post)
    input.value = ''
}
btn.addEventListener('click', createPost)

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        createPost()
    }
})




dynamicElem.id = 'myDynamicElem'
dynamicElem.classList.add('dynamic')
body.append(dynamicElem)

