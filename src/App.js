import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import Message from './Message';
import TextEditTable from './TextEditTable';
import Quote from './Quote';

class App extends Component {
  state = {
    title: 'Un titre par default'
  }
  save = (text) => {
    this.setState({ title: text });
  }

  render() {
    return (
      <div className="container">
        <h1> Mon composant APP</h1>
      <Quote />


      
        <Message limit="20"/>
     

        <TextEditTable save={this.save}>
          <h2>{this.state.title}</h2>
        </TextEditTable>


        <Article title="Mon 1ére titre" imgUrl="imp.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat fugit, iusto minima numquam, reiciendis possimus eum eos ad quia esse laudantium laborum molestiae adipisci, officiis obcaecati beatae! Odit, optio!
      </Article>

        <Article title="Mon 2éme titre" imgUrl="imp2.png">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae obcaecati consequatur ipsa, ad recusandae doloremque quas eveniet repellat alias modi.
      </Article>

       
 

      </div>
    );
  }
}

export default App;
