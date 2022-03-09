import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export class Produits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            images: [],
            prices: []
        }
    }

    componentDidMount = () => {
        axios("https://fakestoreapi.com/products/").then((resultat) => {
            const products = resultat.data
            console.log(products)
            let names = []
            let images = []
            let prices = []
            products.forEach((product) => {

                names.push(product.title)
                images.push(product.image)
                prices.push(product.price)
                
            })
            this.setState({ names })
            console.log(this.state.names)

            this.setState({ images })
            console.log(this.state.images)

            this.setState({ prices })
            console.log(this.state.prices)
        })
    }

    render() {
        return (
            <div>
                <div>
                    {/* {JSON.stringify(this.state.names)}
                    {this.state.names.map(name => {
                        return(
                            <p>
                                {name}
                            </p>
                        )
                    })} */}
                    {this.state.names.map((name, index) => (
                        <div key={index}>
                            <img
                                src={this.state.images[index]}
                                alt={`${name}`}
                            />
                            <p>{name}</p>
                            <p>{this.state.prices[index]}€</p>
                            <Link to={"/product/" + (index + 1)} className='lienImage'>En savoir plus</Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}