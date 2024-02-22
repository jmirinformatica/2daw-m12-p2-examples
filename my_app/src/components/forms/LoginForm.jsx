import { Component } from "preact";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logger from '../../library/Logger';

export default class LoginForm extends Component {
    state = { 
        email: '',
        password: ''
    };

    onSubmit = (e) => {
        Logger.debug("Login form submitted");
        Logger.debug(this.state);
        e.preventDefault();
    }

    onInput = (e) => {
        const data = {}
        data[e.currentTarget.name] = e.currentTarget.value
        this.setState({
            ...this.state,
            ...data
        })
    }

    render(_, { }) {
        return (
            <Form onSubmit={this.onSubmit}>
				<Form.Group className="mb-3" controlId="formEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" name="email" placeholder="Enter email" onInput={this.onInput} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formPassword">
					<Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter password" onInput={this.onInput} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
        );
    }
}