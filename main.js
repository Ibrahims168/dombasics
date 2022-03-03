const title = document.getElementById('title')
const subHeaders = document.getElementsByTagName('h2')
const uniqueHeaders = document.getElementsByClassName('unique')
const header = document.querySelector('#superUnique')
const body = document.getElementsByTagName('body')[0]
const dynamicElem = document.createElement('div')
dynamicElem.id = 'dynamic'
body.append(dynamicElem)