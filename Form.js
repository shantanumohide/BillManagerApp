import React from "react";
import { NavLink } from 'react-router-dom';

class Createbill extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            billTitle:"",
            billAmount:"",
            dueDate:"",
            paidinadvance:false
        }

        this.titleChange=this.titleChange.bind(this);
        this.amountChange=this.amountChange.bind(this);
        this.duedateChange=this.duedateChange.bind(this);
        this.ifpaidinadvance=this.ifpaidinadvance.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
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

    handleSubmit(){
        this.props.onSubmit(this.state.billTitle,parseInt(this.state.billAmount),this.state.dueDate,this.state.paidinadvance)
        
        // let newbill= {
        //     Id:0,
        //     billtitle:this.state.billtitle,
        //     billamount:this.state.billamount,
        //     duedate:this.state.duedate,
        //     paidinadvance:this.state.duedate
        // }
    }

    
    
    
    render(){
        return(
            <form className="Form" >
                <h2>Create Bill</h2>
                <input type="text" value={this.state.billtitle} id="billtitle" name="billtitle" placeholder="Bill Title" onChange={this.titleChange}/><br/>
                <input type="number" id="billamount" name="billamount" placeholder="Bill Amount" value={this.state.billamount} onChange={this.amountChange}/><br/>
                <input type="text" id="duedate" name="duedate" placeholder="Due Date" value={this.state.duedate} onChange={this.duedateChange}/><br/>
                <input type="checkbox" id="paidinadvance" name="paidinadvance" checked={this.state.paidinadvance} onChange={this.ifpaidinadvance}/>
                <label for="paidinadvance"> Paid in Advance </label><br/>
                
                <NavLink to='/'><button onClick={this.handleSubmit}>Create Bill</button></NavLink>
                
            </form>        
        );

    }
    
    
}

export default Createbill;
