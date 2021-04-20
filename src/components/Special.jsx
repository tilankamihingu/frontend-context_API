import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from './Context';
import './css/Special.css';

export class Special extends Component {

    static contextType = DataContext;

    render() {
        const {specials} = this.context
        return (
            <div id="special">
                {
                   specials.map(product => (
                    <div className="card" key={product._id}>
                        <Link to={`/special/${product._id}`}>
                            <img src={product.src} alt=""/>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/special/${product._id}`}>{product.title}</Link>
                            </h3>
                            <p>{product.description}</p>
                            <button>
                            <Link to={`/special/${product._id}`}> View Items</Link>
                            </button>
                        </div>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default Special
