import styled from "styled-components";

const StyledLogoContainer = styled.div`
    height: 150%;
`;

const StyledImage = styled.img`
    height: 100%;
`;

function Logo() {
    return (
        <StyledLogoContainer>
            <StyledImage src={"./companyAssets/nxtwave-logo.jpeg"} alt={"nxtwave-company-logo"}/>
        </StyledLogoContainer>
    );
}

export default Logo;