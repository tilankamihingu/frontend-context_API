import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products:[
            {
                "_id": "1",
                "title": "Pizza",
                "src": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?cs=srgb&dl=pexels-brett-jordan-825661.jpg&fm=jpg",
                "description":"We have Special Pizza",
                "price":"1200.00"
            },
            {
                "_id": "2",
                "title": "Rice and Curry",
                "src": "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?cs=srgb&dl=pexels-cats-coming-674574.jpg&fm=jpg",
                "description":"We have Different Tasty Meals with Rice",
                "price":"250.00"
            },
            {
                "_id": "3",
                "title": "Chinees Food",
                "src": "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?cs=srgb&dl=pexels-chan-walrus-941869.jpg&fm=jpg",
                "description":"We have Special Chinees Food",
                "price":"700.00"
            },
            {
                "_id": "4",
                "title": "Cool drinks",
                "src": "https://images.pexels.com/photos/4551975/pexels-photo-4551975.jpeg?cs=srgb&dl=pexels-roman-odintsov-4551975.jpg&fm=jpg",
                "description":"Special Moonshine Cool Drink.",
                "price":"120.00 - 400.00"
            },
            {
                "_id": "5",
                "title": "Bakery Foods",
                "src": "https://images.pexels.com/photos/6479556/pexels-photo-6479556.jpeg?cs=srgb&dl=pexels-tara-winstead-6479556.jpg&fm=jpg",
                "description":"We have a different Bakery Foods",
                "price":"60.00 - 250.00"
            },
            {
                "_id": "6",
                "title": "Ice Cream",
                "src": "https://images.pexels.com/photos/5060281/pexels-photo-5060281.jpeg?cs=srgb&dl=pexels-roman-odintsov-5060281.jpg&fm=jpg",
                "description":"We have different Ice Creams",
                "price":"100.00 - 250.00"
            },
        ],
        specials:[
            {
                "_id": "7",
                "title": "Remix Kottu",
                "src": "https://media-cdn.tripadvisor.com/media/photo-s/0f/b0/5c/a0/wok-cheese-kottu.jpg",
                "description": "This is Special Remix kottu with Special taste.",
                "price": "450.00"
            },
            {
                "_id": "8",
                "title": "Chocolate Pasta",
                "src": "http://truffle-assets.imgix.net/2b8b62ae-208_chocolatepasta_dishland.jpg",
                "description": "Special Chocolate Pasta in Sri Lanka.",
                "price": "600.00"
            },
            {
                "_id": "9",
                "title": "Chees Noodles",
                "src": "http://irepo.primecp.com/2015/07/229318/One-Pot-Mac-and-Cheese_ExtraLarge1000_ID-1102111.jpg?v=1102111",
                "description": "Special Cheese Noodles in Sri Lanka.",
                "price": "350.00"
            }
        ]
    }

    render() {
        const {products} = this.state;
        const {specials} = this.state;
        return (
            <DataContext.Provider value={{products, specials}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

