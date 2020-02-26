import React, {Component} from 'react';


class FilterObject extends Component{
    constructor (){
        super();

        this.state= {
            employees: [
                {
                name: 'Eric Pippert',
                title: 'The Best Coder',
                age: 'old enough to be your Father'
                },
                {
                name: 'Ammon Bergi',
                title: 'Next Best Coder',
                age: 21
                },
                {
                name: 'Noah Orr',
                title: 'The best Tutor',
                age: 21
                }
                ],
                userInput: ' ',
                filteredEmployees: []
        }
    }
            handleChange(val){
                this.setState({userInput: val});
            }
            filterEmployees(prop){
                let employees = this.state.employees;
                let filteredEmployees = [];
                for(let i=0; i< employees.length; i++ ){
                    if(employees[i].hasOwnProperty(prop)) {
                        filteredEmployees.push(employees[i]);
                    }
                }
                this.setState({filteredEmployees: filteredEmployees});
            } 

render() {
    return(


    <div className="puzzleBox FilterObjectPB">
        <h4>Filter Object</h4>
        <span className="PuzzleText"> Original: {JSON.stringify(this.state.employees, null, 10)}</span>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput)}>Filter</button>
    </div>
    )
}
}
export default FilterObject