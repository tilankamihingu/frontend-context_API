import React, { Component } from 'react';
import Product from './section/Product';
import Details from './section/Details';
import {Route} from 'react-router-dom';
import Home from './Home';


export class Section extends Component {
    render() {
        return (
            <section>
                <Route exact path='/' component={Home} />
                <Route path="/product" component={Product} />
                <Route path="/product/:id" component={Details} />
                <Route path="/special/:id" component={Details} />
            </section>
        )
    }
}

export default Section
