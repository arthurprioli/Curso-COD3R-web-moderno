document.querySelector('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.border.color = '#616161'

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName
        box.insertBefore(label, elemento.childNodes[0])
    }
})