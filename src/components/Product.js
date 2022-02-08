import React, {useState } from 'react';
import styled from 'styled-components';


function Product (props)  {

  const [state, setState] = useState({
    product: props.product,
    likes: 0,
  });
/*
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

*/
  //render() {
    return (
      <div>
        <ProductFrame>
            <ProductImageWrapper>
                <ProductImage src={state.product.img}></ProductImage>
            </ProductImageWrapper>
            <ProductInfoWrapper>
                <AppFrame>{state.product.name}</AppFrame>
            </ProductInfoWrapper>

            <ProductInfoWrapper>
                <AppFrame>Prix : {state.product.price}</AppFrame>
            </ProductInfoWrapper>

            <h3>Likes: {state.likes}</h3>
            <button onClick={ () => setState({...state, likes: state.likes+1})}>
                Like
            </button>
        </ProductFrame>
      </div>
    );
  //}
}

export default Product;
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