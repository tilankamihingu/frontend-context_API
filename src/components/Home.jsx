import React, { Component } from 'react';
import './css/Home.css';
import Banner from '../images/banner.jpg';

import { Link } from 'react-router-dom';
import Special from './Special';

export class Home extends Component {
    render() {
        return (
        <>
        <div className="container">
            <img src={Banner} alt="" />
            <div className="text">
                <h1>Choose Best Foods</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, qui.</p>
                <button>
                <Link to={'/product'}>Explore Now</Link>
                </button>
            </div>
        </div>
        <Special />
        </>
        );
    }
}

export default Home;