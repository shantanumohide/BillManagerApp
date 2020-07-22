import React from "react";
import { NavLink } from 'react-router-dom';

class Editbill extends React.Component{
    
    
    
    constructor(props){
        super(props);
        this.state = {
            billTitle:props.billtoEdit.billTitle,
            billAmount:props.billtoEdit.billAmount,
            dueDate:props.billtoEdit.dueDate,
            paidinadvance:props.billtoEdit.paidinadvance
        }
       

        this.titleChange=this.titleChange.bind(this);
        this.amountChange=this.amountChange.bind(this);
        this.duedateChange=this.duedateChange.bind(this);
        this.ifpaidinadvance=this.ifpaidinadvance.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

    titleChange(params) {
        this.setState({billTitle:params.target.value})
    }

    amountChange(params) {
        this.setState({billAmount:params.target.value})
    }

    duedateChange(params) {
        this.setState({dueDate:params.target.value})
    }

    ifpaidinadvance(){
        this.setState({paidinadvance:!this.state.paidinadvance})
    }

    handleEdit(){
        this.props.Editbill(this.props.billtoEdit.id,this.state.billTitle,parseInt(this.state.billAmount),this.state.dueDate,this.state.paidinadvance)
    }

    handleDelete(){
        this.props.deleteBill(this.props.billtoEdit.id);
    }

    
    
    
    render(){
       
        return(
            <form className="Form" >
                <h2>Edit Bill</h2>
                <input type="text" value={this.state.billTitle} id="billtitle" name="billtitle" placeholder="Bill Title" onChange={this.titleChange}/><br/>
                <input type="number" id="billamount" name="billamount" placeholder="Bill Amount" value={this.state.billAmount} onChange={this.amountChange}/><br/>
                <input type="text" id="duedate" name="duedate" placeholder="Due Date" value={this.state.dueDate} onChange={this.duedateChange}/><br/>
                <input type="checkbox" id="paidinadvance" name="paidinadvance" checked={this.state.paidinadvance} onChange={this.ifpaidinadvance}/>
                <label for="paidinadvance"> Paid in Advance </label><br/>
                <NavLink to='/'><button onClick={this.handleEdit}>Edit Bill</button></NavLink>
                <NavLink to='/'><button onClick={this.handleDelete}>Delete Bill</button></NavLink>
            </form>        
        );

    }
    
    
}

export default Editbill;
