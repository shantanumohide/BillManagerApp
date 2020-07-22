import React from 'react';
import './Navbar.css';


class Overview extends React.Component{
    constructor(props){
        super(props);
        //this.state=props.billDetails
    
    }

    render(){
        let {billDetails}=this.props;
        let Due=0;
        
        const Upcoming = billDetails.filter((i)=>{
            return(
                i.paidinadvance===false
            )
        })
    
        Upcoming.forEach(element => {
            Due+=parseInt(element.billAmount,10)
            console.log(Due)
        });
    
        const totalDue = Due
    
        Due=0
    
    
        const Past = billDetails.filter((i)=>{
            return(
                i.paidinadvance===true
            )
        })
    
        Past.forEach(element => {
            Due+=parseInt(element.billAmount,10)
            console.log(Due)
        });
    
        const paidAmount = Due
        
        return(
            <div class="overview">
                <div class="due">
                    <h5>Total due</h5>
                    <p>${totalDue}</p>
                </div>
                <div class="cash">
                    <h5>Cash available</h5>
                    <p>{this.props.cash}</p>
                </div>
                <div class="credit">
                    <h5>Paid Amount</h5>
                    <p>${paidAmount}</p>
                </div>
            </div>
        );
    }
}

// function Overview(props){
//     let {billDetails}=props;
//     let Due=0;
    
//     const Upcoming = billDetails.filter((i)=>{
//         return(
//             i.paidinadvance===false
//         )
//     })

//     Upcoming.forEach(element => {
//         Due+=parseInt(element.billamount,10)
//         console.log(Due)
//     });

//     const totalDue = Due

//     Due=0


//     const Past = billDetails.filter((i)=>{
//         return(
//             i.paidinadvance===true
//         )
//     })

//     Past.forEach(element => {
//         Due+=parseInt(element.billamount,10)
//         console.log(Due)
//     });

//     const paidAmount = Due
    
//     return(
//         <div class="overview">
//             <div class="due">
//                 <h5>Total due</h5>
//                 <p>${totalDue}</p>
//             </div>
//             <div class="cash">
//                 <h5>Cash available</h5>
//                 <p>{props.cash}</p>
//             </div>
//             <div class="credit">
//                 <h5>Paid Amount</h5>
//                 <p>${paidAmount}</p>
//             </div>
//         </div>
//     );
// }

export default Overview;