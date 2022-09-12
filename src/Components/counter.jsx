import React, { Component } from 'react';

class Counter extends Component {
    // state = { 
    //     value: this.props.counter.value
    //     // imageUrl: 'https://picsum.photos/200'
    //     // tags: ["tag1","tag2","tag3"]
    //     // tags: []
    // };

    // styles = {
    //     fontSize: 50,
    //     fontWeight: 'bold'
    // };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    // constructor() {
    // super();
    // this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = () => {
    // // console.log('Increment Clicked',this);
    // this.setState({ count: this.state.count + 1 });
    // }

    // handleIncrement = () => {
    //     // console.log(product);
    //     this.setState({ value: this.state.value + 1 });
    //     };

    // doubleIncrement = () => {
    // this.handleIncrement({ id: 1 });
    // };

    componentDidUpdate(prevProps, prevState) {
       console.log('prevProps', prevProps);
       console.log('prevState', prevState);
       if (prevProps.counter.value !== this.props.counter.value){
        // Ajax call and get new data from the server
     } 
    }

    componentWillUnmount() {
        console.log('Counter-Unmount');
    }

    render() {
        // console.log(this.props);
        console.log('Counter - Rendered');
        return (
        <div>
            {/* {this.props.children} */}
            {/* <h1>Hello World</h1> */}
            {/* <img src={this.state.imageUrl} alt=''/> */}
            {/* <span style={ this.styles } className='badge badge-primary m-2'>{this.formatCount()}</span> */}
            {/* <span style={ { fontSize:30 } } className='badge badge-primary m-2'>{this.formatCount()}</span> */}
            <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
            {/* <button onClick={this.handleIncrement} className='btn btn-secondary btn-lg'>Increment</button> */}
            {/* <button onClick={this.doubleIncrement} className='btn btn-secondary btn-lg'>Increment</button> */}
            {/* <button 
            onClick={() => this.handleIncrement} 
            className='btn btn-secondary btn-sm'>Increment</button> */}
            <button 
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className='btn btn-secondary btn-sm'>Increment</button>
            {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
            {/* {this.state.tags.length === 0 && "Please create a new tag!"}
            {this.renderTags()} */}
            <button>
                <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">Delete</button>    
            </button> 
        </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;