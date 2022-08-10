import React, { Component } from 'react'
import axios from 'axios';
export class Test extends Component {
   state = {
       data: [],
       isLoaded: false
   }
 componentDidMount () {
   axios.get('https://www.iamluka.tech/wp-json/wp/v2/posts')
       .then(res => this.setState({
           data: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }
   render() {
      console.log(this.state);
       return (
           <div>
              {
                  this.state.data.map(el => {
                      console.log(el.content.rendered)
                      return <div>{el.content.rendered}</div>
                  })
              }
           </div>
       )
   }
}
export default Test