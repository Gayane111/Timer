import './App.css';
import { Component } from "react";
import Card from './UI/Card/Card';
import Text from './UI/Card/Card'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: ''
    }
  }

  componentDidMount() {
    this.setState({
      timer: new Date().toLocaleTimeString()
    })
  }

  componentDidUpdate() {
   this.myTimerTimeOut = setTimeout(() => {
    this.setState({
      timer: new Date().toLocaleTimeString()
    })
   }, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.myTimerTimeOut)
  }
 render() {
  return (

    <Card className = "container">
  <Text> {this.state.timer}</Text>
    </Card>
  
      
    
  )
 }
}

export default App