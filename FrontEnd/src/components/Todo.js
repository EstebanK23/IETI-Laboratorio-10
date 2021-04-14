import React from 'react';
import Cards from './Cards';

export class Todo extends React.Component {


    render() {
        return (
            <Cards
                description = {this.props.description}
                name = {this.props.name}
                email = {this.props.email}
                status = {this.props.status}
                dueDate = {this.props.dueDate.toString()}>
            </Cards>
        );
    }

}