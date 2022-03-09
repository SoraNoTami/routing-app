import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function convert(Component) {
    return (props) => { return <Component params={useParams()} {...props} />}
}


class Produit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produits: []
        }
        console.log("Params: ", this.props.params);
    }

    componentDidMount = () => {
        axios("https://fakestoreapi.com/products/").then((resultat) => {
            const produits = resultat.data
            this.setState({ produits })
        })
    }
    
    render() {
        let numImage = Number(this.props.params.productId)
        console.log(numImage)
        console.log(this.props.produits[1])
        return (
            
            <div>
                <h2>Produit #{this.props.params.productId}</h2>
                <img src={this.props.produits[numImage].image}/>
            </div>

        )
    }
}

export default convert(Produit)