import React, { Component } from 'react';

class Application extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            overTwe: false
        }

    }
    handleClick = () => {
        this.setState({count: this.state.count + 1});
        //console.log("Clicked");
    }
    componentDidUpdate(props, state){
        //console.log("Hy this is Updated from", state, "to", this.state);
        //this.setState({count: this.state.count + 1});
        if(this.state.count >= 20 && this.state.count !== state.count && !this.state.overTwe){
            console.log("Updating over 20");
            this.setState({overTwe: true});
        }
    }
    render() {
        let { count } = this.state;
        return (
            <div>
                <h1>Click the button and {count} no of times</h1>
                {(this.state.overTwe) ?
                <h2>Get high score of 20! dood. </h2> 
                : null   
            }
            
                <span><button onClick={() => this.handleClick()}> 
                    Click me</button></span>
            </div>
            //() is the event if we do not write it the onclich button cannot do anything
        );
    }
}
export default Application;