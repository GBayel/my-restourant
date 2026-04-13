function highlight(element) {
    // Удаляем выделение у всех остальных
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => item.classList.remove('active-item'));
    
    // Добавляем выделение текущему
    element.classList.add('active-item');
    
    console.log("Выбрано блюдо: " + element.querySelector('h3').innerText);
}