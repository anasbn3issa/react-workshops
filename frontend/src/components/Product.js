import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useApi } from "../hooks/useApi";

function Product(props) {
  //console.log("result===",props.product);
  const [state, setState] = useState({
    product: props.product,
    likes: 0,
    best: false,
  });

  // function that handles likes , and set best on likes > 5
  const handleLikes = () => {
    setState({
      ...state,
      likes: state.likes + 1,
      best: state.likes >= 4 ? true : false,
    });
  };
  //const [result,err] = useApi(`products`);
  //console.log("result===",result);
  if (!state.best) {
    return (
      <div>
        <ProductFrame>
          <ProductImageWrapper>
            <ProductImage src={state.product.image}></ProductImage>
          </ProductImageWrapper>
          <ProductInfoWrapper>
            <AppFrame>
              <Link to={`${state.product._id}`}>
                <h2>{props.product.title}</h2>
              </Link>
            </AppFrame>
          </ProductInfoWrapper>

          <ProductInfoWrapper>
            <AppFrame>Prix : {state.product.price}</AppFrame>
          </ProductInfoWrapper>

          <h3>Likes: {state.likes}</h3>
          <Button onClick={() => handleLikes()}>Like</Button>
        </ProductFrame>
      </div>
    );
  } else {
    return (
      <div>
        <ProductFrameBest>
          <ProductImageWrapperBest>
            <ProductImage src={state.product.img}></ProductImage>
          </ProductImageWrapperBest>
          <ProductInfoWrapperBest>
            <AppFrame>{state.product.name}</AppFrame>
          </ProductInfoWrapperBest>
          <ProductInfoWrapperBest>
            <AppFrame>Prix : {state.product.price}</AppFrame>
          </ProductInfoWrapperBest>
          <h3>Likes: {state.likes}</h3>
          <Button onClick={() => handleLikes()}>Like</Button>
        </ProductFrameBest>
      </div>
    );
  }
}

export default Product;
// --- css du composant de la liste des produits -----

// ---- css du composant App -----------
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
// ------- css du composant NavBar ---------------
const HeaderFrame = styled.div`
  min-height: 50px;
  min-width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  & > ul {
    list-style: none;
    display: flex;
    & > li:not(:nth-child(1)) {
      margin-left: 10px;
    }
  }
`;
// ------------css du composant Product --------
const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
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
    text-align: center;
  }
`;
const ProductFrameBest = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: #db7093;
  margin: 10px;
  display: flex;
  flex-direction: column;
  animation: clignote 2s linear infinite;
  @keyframes clignote {
    50% {
      opacity: 0.5;
    }
  }
`;
const ProductImageWrapperBest = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImageBest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapperBest = styled.div`
  color: white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Footer = styled.footer`
  background: transparent;
  grid-area: footer;
  padding: 0.25rem;
  text-align: right !important;
`;
const H1 = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
`;

const H3 = styled.h3`
  color: palevioletred;
  font-size: 1.25em;
  font-weight: bold;
`;
const Span = styled.span`
  color: grey;
  font-size: 1.25em;
`;
