import React, { Component } from 'react';

class Message extends Component {

    state ={
        text: ''
    };
    changeText = (event) => {
        this.setState({text: event.target.value});
    };

    render() {
        const style = {};
        const length = this.state.text.length;

        if (length> (this.props.limit - 5)){
            style.color = 'red';
        }

        return (

            <div>
                <textarea 
                onChange={this.changeText} 
                rows="2" cols="30" 
                style={style}
                maxLength={this.props.limit}></textarea>

                <div> Nombre de caractères : {length} </div>
                <p>{this.state.text}</p>
            </div>
             
        )
        
    }
    
}


export default Message;