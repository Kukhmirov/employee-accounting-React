import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import Data from './data';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            DataT: [],
            term: '',
            filter: 'all'
        }
        this.maxId = 12
    }

    deleteItem = (id) => {
        this.setState(({DataT}) => {
            const data = DataT.filter(item => item.id !== id);
            return {
                DataT: data,
                maxId: 0
            }
        });
    }

    addItems = (name, salary) => {
        this.maxId++;

        this.setState(({DataT}) => {
            const data = [{
                name: name,
                salary: salary,
                id: this.maxId,
                rise: false,
                increase: false
            }];

            return {
                DataT: [...DataT, ...data]
            }
        });
    }

    add = () => {
        this.setState(() => ({DataT: Data}));
    }

    onToggleProp = (id, prop) => {
        this.setState(({DataT}) => ({
            DataT: DataT.map(item => {
                if(item.id === id){
                    return{...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    };

    searchEmp = (items, term) => {
        if(term.length === 0){
            return items;
        } else {
            return items.filter(item => {
                return item.name.indexOf(term) > -1
            });
        }
    }

    onUpdateSearch = (item) => {
        this.setState(({term: item}));
        this.searchEmp(this.state.DataT, this.state.term)
    }

    searchFilter = (items, filter) => {
        switch (filter){
            case 'rise': 
                return items.filter(item => item.rise)
            case 'moreThen1000' :
                return items.filter(item => item.salary > 1000)
            default: 
                return items
        };
    }

    onFilterSelect = (filter) => {
        this.setState(({filter: filter}))
    }

    render() {
        const {DataT, term, filter} = this.state;
        const employeesIncrease = DataT.filter(data => data.increase).length;
        const employeesRise = DataT.filter(data => data.rise).length;
        const visibleData = this.searchFilter(this.searchEmp(DataT, term), filter) ;

        return (
            <div className="app">
                <Header/>
                <AppInfo 
                    employeesLength = {DataT.length}
                    employeesRise = {employeesRise}
                    employeesIncrease = {employeesIncrease}
                    addData = {this.add}/>
    
                <div className="main">
                     <div className="search-panel">
                        <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                        <AppFilter filter = {filter}
                            onFilterSelect = {this.onFilterSelect}/>
                    </div>
                    <EmployersList 
                        onToggleProp = {this.onToggleProp}
                        data={visibleData}
                        onDelete={this.deleteItem}/>
                    <EmployersAddForm addItems = {this.addItems}/>
                </div>
               
                
            </div>
            
        );
    }
}

export default App;