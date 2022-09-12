import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    // state = { 
    //     counters: [
    //         { id: 1, value: 4 },
    //         { id: 2, value: 0 },
    //         { id: 3, value: 0 },
    //         { id: 4, value: 0 }
    //     ]
    // };

    // handleIncrement = counter => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index]  = {...counter};
    //     counters[index].value++;
    //     this.setState({counters});
    // };

    // handleReset = () => {
    //   const counters = this.state.counters.map(c => {
    //     c.value = 0;
    //     return c;
    // }); 
    // this.setState({ counters }); 
    // };

    // handleDelete = (counterId) => {
    //     // console.log('Event Handler Called', counterId);
    //     const counters = this.state.counters.filter(c => c.id !== counterId);
    //     this.setState({ counters })
    // };

    render() { 
        console.log('Counters - Rendered');
        const { onReset, counters, onDelete, onIncrement} = this.props;
        return (
        // <div>
        //     <button onClick={this.handleReset} 
        //     className="btn-primary btn-sm m-2">Reset</button>
        //     { this.state.counters.map(counter => (
        //     <Counter 
        //         key={counter.id} 
        //         onDelete={this.handleDelete} 
        //         // value={counter.value} 
        //         // id={counter.id}
        //         onIncrement={this.handleIncrement}
        //         counter={counter}
        //         // <h4>Counter #{counter.id}</h4>
        //     />
        //     ))}
        // </div>
        <div>
            <button onClick={onReset} 
            className="btn-primary btn-sm m-2">Reset</button>
            { this.props.counters.map(counter => (
            <Counter 
                key={counter.id} 
                onDelete={onDelete} 
                onIncrement={onIncrement}
                counter={counter}
            />
            ))}
        </div>
        );
    }
}
 
export default Counters;