import React, {Component } from 'react';
import styled from 'styled-components';

export class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
            likes: 0,
            updated: false,
        }
        this.addLikes = this.addLikes.bind(this);
    }

    addLikes = () => {
        this.setState((OldState)=>{
            return {
                likes: OldState.likes + 1,
                updated: true,
            }
        })
    }

    componentDidMount = () => {
        console.log('component did mount');
    }

    componentDidUpdate = () => {
        console.log('component did update');
    }
    componentWillUnmount = () => {
        console.log('component destroyed');
    }

    
  render() {
    return (
      <div>
        <ProductFrame>
            <ProductImageWrapper>
                <ProductImage src={this.state.product.img}></ProductImage>
            </ProductImageWrapper>
            <ProductInfoWrapper>
                <AppFrame>{this.state.product.name}</AppFrame>
            </ProductInfoWrapper>

            <ProductInfoWrapper>
                <AppFrame>Prix : {this.state.product.price}</AppFrame>
            </ProductInfoWrapper>

            <h3>Likes: {this.state.likes}</h3>
            <button onClick={this.addLikes} >
                Like
            </button>
        </ProductFrame>
      </div>
    );
  }
}

// ----- css du composant Product
const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 150px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center`;

// ----- css du composant App
const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;