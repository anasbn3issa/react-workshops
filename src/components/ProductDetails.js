import React from "react";
import styled from "styled-components";

export default function ProductDetails(props) {
    return(
        <Container>            
            <ContentBox>
                <ProductFrame>
                    <Content1>
                        <ProductImageWrapper>
                            <ProductImage src={props.product.img}></ProductImage>
                        </ProductImageWrapper>
                    </Content1>
                    <Content2>
                        <ProductInfoWrapper>
                            <h2>{props.product.name}</h2>
                        </ProductInfoWrapper>
                        <ProductInfoWrapper>
                            <AppFrame>
                                <p>Description :</p>
                                {props.product.description}
                                </AppFrame>
                        </ProductInfoWrapper>
                        <ProductInfoWrapper>
                            <AppFrame>Prix : {props.product.price}</AppFrame>
                        </ProductInfoWrapper>
                        <ProductInfoWrapper>
                            <AppFrame>Likes : {props.product.likes}</AppFrame>
                        </ProductInfoWrapper>
                    </Content2>
                    
            </ProductFrame>
          </ContentBox>

          <Button onClick ={ () => props.history.replace("/products")}>Return to products</Button>
        </Container>
    );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
 
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
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
// ---------------- css du composant ProductDetails ---------


const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-areas:
    "content content"
    "footer footer";
  text-align: left;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 1fr;
    grid-template-areas:
      "content"
      "footer";
  }
  color: black;
`;
const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Content1 = styled.div`
  background: transparent !important;
  padding: 0.25rem;
  width: 40%;
  height: 100%;
`;
const Content2 = styled.div`
background: transparent !important;
padding: 0.25rem;
width: 60%;
height: 100%;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;