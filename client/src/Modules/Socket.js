import React, { Component } from 'react'
import { io } from 'socket.io-client'

class Socket extends Component {
    constructor(props) {
        super(props);
        this.state = { socket: null }
    }
    
    async componentDidMount(){
        let newSocket = await io('/', {
            path: '/socket'
        })
        this.setState({socket: newSocket})
        this.state.socket.on('message', message => {
            console.log(message)
            if(message === '1'){
                this.props.refresh()
            }
        })
    }

    render() { 
        return ( 
            <div>
            </div>
         );
    }
}
 
export default Socket;