const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', event => { //по клику навигаций
    if (event.target.tagName !== 'LI') return false; //здесь интересует только по нажатию на LI. return false - если нажали не по LI, дальше нам не интересно

    let filterClass = event.target.dataset['f']; // получаем data-f

    filterBox.forEach(elem => { //нам нужно выбрать класс, и их скрыть
        elem.classList.remove('hide'); //чтобы повторно работал
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') { //проверить наличие класса, и если их там нет, то надо скрыть
            elem.classList.add('hide');
        }
    });
});