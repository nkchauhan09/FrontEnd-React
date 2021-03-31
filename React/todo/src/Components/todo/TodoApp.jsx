import React, {Component} from 'react'

class TodoApp extends Component{
    render(){
        return(
            <div className = "TodoApp">
                <LoginComponent></LoginComponent>
            </div>
        )
    }
}

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            username : 'neeraj',
            password : '',
            hasLoginFailed : false,
            showSuccessMessage : false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        // console.log(this.state)
        this.setState({
            [event.target.name]:
            event.target.value})
    }

    // handleUsernameChange(event){
    //     console.log(event.target.value)
    //     this.setState({username:event.target.value})
    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({password:event.target.value})
    // }

    loginClicked(){
        if(this.state.username === 'neeraj' && this.state.password === 'dummy')
        {
            console.log("Successful")
            this.setState({showSuccessMessage : true})
            this.setState({hasLoginFailed : false})
        }
        else
            console.log("Failed")
            this.setState({showSuccessMessage : false})
            this.setState({hasLoginFailed : true})
        // console.log(this.state)
    }

    render(){
        return(
            <div>
                <ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}></ShowInvalidCredentials>
                <ShowLoginSuccessMessage showSuccessMessage = {this.state.showSuccessMessage}></ShowLoginSuccessMessage>
                User Name : <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}></input>
                Password : <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}></input>
                <button onClick = {this.loginClicked}>Login</button>
            </div>
        )
    }
}

function ShowInvalidCredentials(props)
{
    if(props.hasLoginFailed)
    {
        return <div>Invalid Credentials</div>
    }
    return null
}

function ShowLoginSuccessMessage(props)
{
    if(props.showSuccessMessage)
    {
        return <div>Login Successful</div>
    }
    return null
}

export default TodoApp