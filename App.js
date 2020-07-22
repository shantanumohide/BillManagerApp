import React from 'react';
import './App.css';
import './index.css';
import Navbar from './Navbar';
import Landing_image from './Landing_image.png';
import Overview from './overview';
import './Navbar.css';
import SwitchBill from './switchBill';
import Footer from './footer.js';
import Createbill from './Form.js';
import Editbill from './Editbill.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      billDetails:[],
      toEdit:""
    }
    this.onSubmit=this.onSubmit.bind(this)
    this.onEdit=this.onEdit.bind(this)
    this.Editbill=this.Editbill.bind(this)
    this.deleteBill=this.deleteBill.bind(this)
    this.Billdata=this.Billdata.bind(this)
  }

  componentDidMount(){
    this.Billdata()
  }

  onSubmit(billTitle,billAmount,dueDate,paidinadvance){
    const lastindex = this.state.billDetails.length-1;
    let newid=0;
    if(lastindex!==-1){ 
      newid=this.state.billDetails[lastindex].id+1;
    } else {newid=1}
    
    
   
    const element = {id:newid,billTitle:billTitle,billAmount:billAmount, dueDate:dueDate ,paidinadvance: paidinadvance}
    console.log(JSON.stringify(element))

    fetch('https://localhost:5001/api/bills', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(element)
          }).then(data=>{
              console.log(data.json())
              this.setState({
              billDetails:[...this.state.billDetails,element]
            })});
    
    //console.log(response)
  }

  onEdit(id){
    const toEdit = this.state.billDetails.find(i => i.id === id);
    console.log("Selected object for edit: ", toEdit);
    this.setState({toEdit:toEdit})
    console.log(this.state.toEdit)
  }

  Editbill(id,billTitle,billAmount,dueDate,paidinadvance){
    const index = this.state.billDetails.findIndex(i=>i.id===id)
    const element = {id:id,billTitle:billTitle,billAmount:billAmount, dueDate:dueDate ,paidinadvance: paidinadvance}
    
    fetch('https://localhost:5001/api/bills', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(element)
          }).then(data=>{
              console.log(data.json())
              this.setState(({billDetails})=>({
                billDetails:[
                  ...billDetails.slice(0,index),
                  {
                    ...billDetails[index],
                    billTitle:billTitle,
                    billAmount:billAmount,
                    dueDate:dueDate,
                    paidinadvance:paidinadvance
                  },
                  ...billDetails.slice(index+1),
          
                ]
              }))
            });
    
    
    console.log(this.state.billDetails)
  }

  deleteBill(id){
    const index = this.state.billDetails.findIndex(i=>i.id===id)
    const tempBill = this.state.billDetails.slice()
    tempBill.splice(index,1)
    const Id = id
    
    fetch('https://localhost:5001/api/bills/'+Id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
          }).then(data=>{
              console.log(data.json())
              this.setState({billDetails:tempBill})});
  }

  Billdata(){
    fetch('https://localhost:5001/api/bills/').then(data=>data.json()).then(data=>{
                                            console.log(data)
                                            this.setState({billDetails:data})
                                          })
  }
  
  render(){
    return (    
      <Router>
        <div className="App">
          <Route path='/' exact strict render={
            ()=>{
            return(
              <div>
                <Navbar className="Navbar"/>
                <img src={Landing_image} alt="Landing_image" className="Landingimage"/>
                {/* {this.state.billDetails.length > 0 ? 
                   <Overview billDetails={this.state.billDetails} cash="$12,818" className="Overview"/> 
                   : null
                }
                {this.state.billDetails.length > 0 ? 
                <SwitchBill billDetails={this.state.billDetails} onEdit={this.onEdit}/>
                   : null
                } */}
                <Overview billDetails={this.state.billDetails} cash="$0" className="Overview"/>
                <SwitchBill billDetails={this.state.billDetails} onEdit={this.onEdit}/>
                <Footer />
              </div>  
            );}
            }
          />
          
          {/* <Route path='/showBill' exact strict render={
            ()=>{
              return(<ShowBill billDetails={billDetails} showUpcoming={this.state.showUpcoming}/>);
            }
          }
          /> */}    

          <Route path='/Createbill' exact strict render={
            ()=>{
              return(
                <Createbill onSubmit={this.onSubmit}/>
              );
            }
          }/>
        

        <Route path='/Editbill' exact strict render={
            ()=>{
              return(
                <Editbill billtoEdit={this.state.toEdit} Editbill={this.Editbill} deleteBill={this.deleteBill}/>
              );
            }
          }/>
        </div>
      </Router>
          
      );
    }
  }
  

export default App;
