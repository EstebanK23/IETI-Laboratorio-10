import React, {Component} from 'react';

import './TodoApp.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import TextField from '@material-ui/core/TextField';



export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    render() {

        return (
            <div className="TodoApp">
                <TodoList todoList={this.state.items}/>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Description"
                    type="text"
                    fullWidth
                    onChange = {this.handleDescriptionChange}
                    value = {this.state.description}
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    onChange = {this.handleNameChange}
                    value = {this.state.name}
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email"
                    type="email"
                    fullWidth
                    onChange = {this.handleEmailChange}
                    value = {this.state.email}
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Status"
                    type="text"
                    fullWidth
                    onChange = {this.handleStatusChange}
                    value = {this.state.status}
                />

                <DatePicker
                    id="due-date"
                    selected={this.state.dueDate}
                    placeholderText="Due date"
                    onChange={this.handleDateChange}>
                </DatePicker>
                <input type="file" id="file" onChange={this.handleInputChange}/>
                 <td>{this.props.fileUrl ? <img src={this.props.fileUrl} /> : <div/>}</td>
            </div>
        );
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            description: this.state.text,
            name: this.state.priority,
            email: this.state.dueDate,
            status: this.state.text,
            dueDate: this.state.priority,
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            name: '',
            email: '',
            status: '',
            dueDate: ''
        }));
    }

    handleInputChange(e) {
                        this.setState({
                            file: e.target.files[0]
                        });
                    }

            let data = new FormData();
                    data.append('file', this.state.file);

                    this.axios.post('files', data)
                        .then(function (response) {
                            console.log("file uploaded!", data);
                    })
                    .catch(function (error) {
                        console.log("failed file upload", error);
                    });

    loadDataFromServer() {

                let that = this;

                this.axios.get("todo").then(function (response) {
                    console.log("This is my todolist:  ", response.data);
                    that.setState({items: response.data})
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

}

export default TodoApp;