import './figures-zone.css';

const FiguresZone = ({figures}) => {

    const dragStart = (event) => {
        setTimeout(() => {
            event.target.classList.add('hide');
        }, 0)
    }

    const dragEnd = (event) => {
        event.target.classList.remove('hide'); 
    }

    const figuresElems = figures.map((figure, index) => {
        const classNames = `figure ${figure.color}`;
        return (
            <div className={classNames} 
                 draggable="true"
                 onDragStart={dragStart}
                 onDragEnd={dragEnd}
                 key={index}>
                <span className={figure.title}></span>
            </div>
        )
    })

    return (
        <div className="figures-zone">
            {figuresElems}
        </div>
    )
}

export default FiguresZone