import React from 'react';
import './App.css';

import MainZone from './components/MainZone/MainZone';
import FiguresZone from './components/FiguresZone/FiguresZone';

class App extends React.Component {

    state = {
        counter: 0
    }

    incCounter = () => {
        
        const restFigures = document.querySelector('.figures-zone').children.length;
        const counter = this.figures.length - restFigures;
        this.setState({counter: counter})
    }

    figures = [
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

    render () {
        const {counter} = this.state;
        return (
            <div className="app">
                <h2 className="counter-title">
                    Фигур в зоне для перетаскивания: <span className="counter">{counter}</span>
                </h2>
                <MainZone incCounter={this.incCounter}/>
                <FiguresZone figures={this.figures} />
            </div>
        );
    }
}

export default App;
