let queue = new QueueDataStructure()

let addQueueButton = document.getElementById('addQueueButton').addEventListener('click', enQueue)
let takeQueueButton = document.getElementById('takeQueueButton').addEventListener('click', deQueue)

// // 


let queueDOM = document.querySelector('.queuelist')
let queueItem

function printList() {

    for (i = 0; i < queue.MAX_SIZE; i++) {
        queueItem = document.createElement('li')
        queueItem.classList.add('emptyQueue')
        queueDOM.appendChild(queueItem)

    }

}

printList()

let inputQ = ''
let queueLi = ''
// let gif = ''

function enQueue() {
    console.log('asdf')

    if (queue.canEnqueue()) {
        gif = document.getElementById('gif')
        inputQ = document.querySelector('.queueinput').value
        queueLi = document.querySelectorAll('.emptyQueue')
        gif.classList.remove('yes')
        queueLi[0].innerHTML = inputQ
        queueLi[0].classList.remove('emptyQueue')
        queueLi[0].classList.add('list-group-item')
        queueLi[0].classList.add('fullQueue')

        queue.queueControl.unshift(input)
    } else {

        return alert('FUUUUUULL')
    }
}

function deQueue() {
    gif = document.getElementById('gif')
    if (queue.isEmpty()) {
        gif.classList.add('yes')

    } else {
        queueLi = document.querySelectorAll('.fullQueue')
        queueLi[0].innerHTML = ''
        queueLi[0].classList.remove('fullQueue')
        queueLi[0].classList.remove('list-group-item')

        queueLi[0].classList.add('emptyQueue')
        queue.queueControl.pop(input)
    }
}