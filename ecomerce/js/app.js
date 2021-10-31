document.querySelectorAll('.drop > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-drop > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelector('#mb-menu-alt').addEventListener('click', () => document.querySelector('#header-wrapper').classList.add('active'))

document.querySelector('#mb-menu-close').addEventListener('click', () => document.querySelector('#header-wrapper').classList.remove('active'))