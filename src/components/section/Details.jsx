import React, { Component } from 'react'
import {DataContext} from '../Context';

import '../css/Details.css';

export class Details extends Component {

    static contextType = DataContext; 
        state = {
            product: []
        }

       getProduct = () => {
           if(this.props.match.params.id){
               const res = this.context.products;
               const data = res.filter(item =>{
                   return item._id === this.props.match.params.id
               }) 
               this.setState({product:data})
           }
       };
       getProduct = () => {
        if(this.props.match.params.id){
            const res = this.context.specials;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            }) 
            this.setState({product:data})
        }
    };

       componentDidMount(){
           this.getProduct();
       }
    render() {
        const {product} = this.state;
        return (
            <>
            {
             product.map(item =>(
                 <div className="details" key={item._id}>
                     <img src={item.src} alt=""/>
                     <div className="box">
                         <div className="row">
                             <h2>{item.title}</h2>
                             <span>Rs.{item.price}</span>
                         </div>
                         <p>{item.description}</p>
                         
                     </div>
                 </div>
             ))
            }
            </>
        )
    }
}

export default Details
