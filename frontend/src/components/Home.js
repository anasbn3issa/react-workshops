import React from "react";
import styled from "styled-components";

export default function Home(props) {
    return (
        <div>
            <WelcomeWrapper>
                <h1>Welcome to our shop</h1>
            </WelcomeWrapper>
        </div>
    )
}
const WelcomeWrapper = styled.div`
    display: flex;
    text-align: center;
`;