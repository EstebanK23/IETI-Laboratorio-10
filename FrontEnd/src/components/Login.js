import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import { BrowserRouter as Link } from 'react-router-dom';


export class Login extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {username:"", password:""};
        localStorage.setItem("username","esteban@gmail.com");
        localStorage.setItem("password", "2302");
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);

    }
    
    render(){
        const login = () => {
            if (localStorage.getItem('username') === this.state.username && localStorage.getItem('password') === this.state.password){
                localStorage.setItem('IsLoggedIn', "true");
            }
            
        }
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" 
                                name="email" 
                                autoComplete="email" 
                                autoFocus
                                onChange={this.handleChangeUsername}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChangePassword}
                                />
                            </FormControl>
                            <Link to="/Drawer">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={login}
                            >
                                Sign in
                            </Button>
                            </Link>
                            
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
    handleChangeUsername(e) {
        this.setState({Username : e.target.value});
    }
    handleChangePassword(e){
        this.setState({password : e.target.value});
    }
}