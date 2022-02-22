import './employers-add-form.css';

import {Component} from 'react';

class EmployersAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    test = (e) => {
        
        e.preventDefault();

        this.props.addItems(this.state.name, this.state.salary);

        this.setState(() => ({
            name: '',
            salary: ''
        }))
    }

    render(){
        const {name, salary} = this.state;

        return(
            <div className="app-add-form">
                <h3>Добавьте нового пользователя</h3>
                <form className="add-form">
                    <input type="text"
                        onChange={this.onValueChange}
                        className="form-control" 
                        name = "name"
                        value={name}
                        placeholder="Имя" />
                    <input type="number" 
                        onChange={this.onValueChange}
                        className="form-control" 
                        name = "salary"
                        value={salary}
                        placeholder="З/П в $"/>
                    <button 
                        type="submit"
                        onClick={this.test}
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
};

export default EmployersAddForm;