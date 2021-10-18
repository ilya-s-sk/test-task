import './main-zone.css';

const MainZone = ({incCounter}) => {

    const numberOfColumns = 5;
    const columnsElems = [];

    const dragOver = (event) => {
        event.preventDefault()
    }
    const drop = (event) => {
        const item = document.querySelector('.hide');
        event.currentTarget.append(item);
        event.currentTarget.classList.remove('hovered');

        incCounter()
    }
    const dragEnter = (event) => {
        event.currentTarget.classList.add('hovered')
    }
    const dragLeave = (event) => {
        event.target.classList.remove('hovered')
    }

    for (let i = 0; i < numberOfColumns; i++) {
        const elem = (
            <div className="main-zone__col"
                 onDragOver={dragOver}
                 onDrop={drop}
                 onDragEnter={dragEnter}
                 onDragLeave={dragLeave}
                 key={i}></div>
        )
        columnsElems.push(elem)
    }


    return (
        <div className="main-zone">
            {
                columnsElems
            }
        </div>
    )
}

export default MainZone