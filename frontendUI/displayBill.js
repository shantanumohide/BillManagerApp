import React from "react";
// eslint-disable-next-line
import {NavLink} from 'react-router-dom';
// import Editbill from "./Editbill";


class Billdetail extends React.Component {
   constructor(props){
      super(props);
      // this.state = {
      //   id:props.id,
      //   billtitle:props.billtitle,
      //   billamount:props.billamount,
      //   duedate:props.duedate,
      //   paidinadvance:props.paidinadvance
      // }
      this.editClick=this.editClick.bind(this)
   }

   editClick(){
      this.props.onEdit(this.props.id);
   }

   render(){
     return(
      <tr>
        <td>{this.props.dueDate}</td>
        <td>{this.props.billTitle}</td>
        <td>${this.props.billAmount}</td>
        <td>
        
          <NavLink to='/Editbill'><button onClick={this.editClick}>Edit bill</button></NavLink>         
        
        </td> 
      </tr>
     );
   }
}
      

function DisplayBill(props){
  const {billDetails,onEdit} = props
    

  const editBill = (index)=>{
    onEdit(index);
  }
  
  const BillDescription = billDetails.map((billDetail) => 
      <Billdetail id={billDetail.id} billTitle={billDetail.billTitle} billAmount={billDetail.billAmount} dueDate={billDetail.dueDate} 
          paidinadvance={billDetail.paidinadvance} onEdit={editBill}/> 
  
  // <tr id={index} onClick={editBill(index)}>
    //   <td>{billDetail.duedate}</td>
    //   <td>{billDetail.billtitle}</td>
    //   <td>${billDetail.billamount}</td>
    //   <td>
    //   <button>
    //       Edit bill        
    //   </button>
    //   </td> 
    // </tr>
  )

  

  
  
  return( 
                        <div>
                          <div class="Bill">
                            <h3 class="description">{props.description}</h3> 
                            <table>
                              <thead>
                                <tr>
                                    <th class="due">Due</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                {BillDescription}
                              </tbody>                           
                            </table>
                          </div>
                        </div>  
  );
}

export default DisplayBill;