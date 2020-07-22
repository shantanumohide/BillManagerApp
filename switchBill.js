import React from "react";
import DisplayBill from './displayBill.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class SwitchBill extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showUpcoming:true,
            showPast:false,
            //billDetails:props.billDetails
        };
        this.handleClick1=this.handleClick1.bind(this);
        this.handleClick2=this.handleClick2.bind(this);
        this.onEdit=this.onEdit.bind(this);
 }

    
    handleClick1(){
        this.setState(
            {
                showUpcoming:true,
            }
        );
        this.setState(
            {
                showPast:false,
            }
        );

    }

    handleClick2(){
        this.setState(
            {
                showUpcoming:false,
            }
        );
        this.setState(
            {
                showPast:true,
            }
        );
    }

    onEdit(id) {
        this.props.onEdit(id);
    }
    render(){
        const billDetails=this.props.billDetails
        const filteredDetails = this.state.showUpcoming ? billDetails.filter(i=>{
            return(
                i.paidinadvance===false
            );
        }) : billDetails.filter(i=>{
            return(
                i.paidinadvance===true
            );
        })
        return(
            <div className="SwitchBill">
                <div class="category">
                    <button onClick={this.handleClick1}>Upcoming</button>
                    <button onClick={this.handleClick2}>Past</button>
                </div>

               { this.state.showUpcoming ? <DisplayBill billDetails={filteredDetails} description="Upcoming Bills" onEdit={this.props.onEdit}/> 
                : <DisplayBill  billDetails={filteredDetails} description="Past Bills" onEdit={this.props.onEdit}/> }    

                {/* <ShowBill billDetails={billDetails} showUpcoming={this.state.showUpcoming} />
                {/* <Route path='/showBill' exact strict render={()=>{
                    return(<ShowBill billDetails={billDetails} showUpcoming={this.state.showUpcoming} />);
                } */}
                
                
            </div>
        );
    }
}

// function ShowBill(props){
//     const {showUpcoming,billDetails} = props;
//     const filteredDetails = showUpcoming ? billDetails.filter(i=>{
//         return(
//             i.paidinadvance===false
//         );
//     }) : billDetails.filter(i=>{
//         return(
//             i.paidinadvance===true
//         );
//     })
    
//     return(
//         <div>
//             <button>
//                     <NavLink to='/showBill'>Edit</NavLink>
//             </button>
//             {
//                 showUpcoming ? <DisplayBill billDetails={filteredDetails} description="Upcoming Bills"/> 
//                 : <DisplayBill  billDetails={filteredDetails} description="Past Bills"/>
//             }
            
//         </div>
//     )
    
// }

export default SwitchBill;