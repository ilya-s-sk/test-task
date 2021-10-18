const figures = [
    {
        title: 'square',
        color: 'red'
    }, {
        title: 'circle',
        color: 'green'
    }, {
        title: 'triangle',
        color: 'red'
    }, {
        title: 'circle',
        color: 'blue'
    },
]

const figuresZone = document.querySelector('.figures-zone');

figures.forEach(figure => {
    const elem = document.createElement('div');
    elem.classList.add(figure.color, 'figure');
    elem.setAttribute('draggable', true);
    elem.innerHTML = `<span class="${figure.title}"></span>`;
    figuresZone.append(elem);
})


const figuresElems = document.querySelectorAll('.figure');
const placesToPut =  document.querySelectorAll('.main-zone__col');

figuresElems.forEach(figure => {
    figure.addEventListener('dragstart', event => {
        setTimeout(() => {
            event.target.classList.add('hide');
        }, 0)
    })

    figure.addEventListener('dragend', event => {
        event.target.classList.remove('hide'); 
    })
})

placesToPut.forEach(place => {
    place.addEventListener('dragover', event => {
        event.preventDefault()
    });
    place.addEventListener('drop', event => {
        const item = document.querySelector('.hide');
        event.currentTarget.append(item);
        event.currentTarget.classList.remove('hovered');

        console.log(document.clientX);


        puttedFigures = figures.length - figuresZone.children.length; 
        counter.textContent = puttedFigures;
    });

    place.addEventListener('dragenter', event => {
        event.currentTarget.classList.add('hovered')
    })
    place.addEventListener('dragleave', event => {
        event.target.classList.remove('hovered')
    })
});

let puttedFigures = 0;
const counter = document.querySelector('.counter');
counter.textContent = puttedFigures;

