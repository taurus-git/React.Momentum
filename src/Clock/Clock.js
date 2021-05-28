import React from 'react';
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="date-wrapper">
                <span className="date" >
                    {this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>

            </div>
        );
    }
}
export default Clock;