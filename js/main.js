const todoInput = document.querySelector('.js-input')
const form = document.querySelector('.form')
const body=document.querySelector("body")
const taskContainer = document.querySelector('.task_container')
const click=document.querySelector('.click')
click.addEventListener('click',(e)=>{
    e.preventDefault();
    body.classList.toggle('dark')
    localStorage.setItem()
})
form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const time = new Date();
    const taskMainElement = document.createElement('div');
    const taskMainTitle = document.createElement('p')
    const btnWrapperElement = document.createElement('div')
    btnWrapperElement.className = 'task-item__btn-wrapper'
    btnWrapperElement.innerHTML = `
    <button class="btn-complete"><i class="fas fa-circle-check"></i> <br> Complete </button>
    <button class="edit"><i class="fas fa-edit"></i> <br> Edit</button>
    <button class="clock"><i class="fas fa-clock"></i> <br>${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}</button>
    <button class="delete"><i class="fas fa-trash"></i> <br> Delete</button>
    `
    taskMainTitle.innerText = todoInput.value;
    taskMainElement.className = 'task-item'
    taskMainElement.appendChild(taskMainTitle)
    taskMainElement.appendChild(btnWrapperElement)
    taskContainer.appendChild(taskMainElement)
    todoInput.value = ''
})
taskContainer.addEventListener('click', (e) => {
    if (e.target.className.includes('btn-complete')) {
        e.target.parentElement.previousSibling.classList.toggle('compeleted')
    } else if (e.target.className.includes('delete')) {
        const isAgreeToDelete = confirm('Are sure delete this item?')
        if (isAgreeToDelete === true) {
            e.target.parentElement.parentElement.classList.add('remove-item')
            setTimeout(()=>{
                e.target.parentElement.parentElement.remove()
            }, 300)
        }
    } else if (e.target.className.includes('edit')) {
        e.target.parentElement.previousSibling.classList.add("changing")
        if (e.target.parentElement.previousSibling.hasAttribute('contenteditable')) {
            e.target.parentElement.previousSibling.removeAttribute('contenteditable')
            e.target.parentElement.previousSibling.classList.remove("changing")
            e.target.innerHTML = '<i class="fas fa-edit"></i> <br> Edit'
            e.target.style.background = 'gold'

        } else {
            e.target.parentElement.previousSibling.setAttribute('contenteditable', true);
            e.target.parentElement.previousSibling.classList.add("changing");
            e.target.innerHTML = '<i class="fas fa-check-double"></i> <br> Done'
            e.target.style.background = 'purple'
        }

    }

})