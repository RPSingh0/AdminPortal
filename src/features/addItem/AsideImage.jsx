import styled from "styled-components";

const StyledFormAsideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
        display: none;
    }
`;

function AsideImage() {
    return (
        <StyledFormAsideImage src={"./form/form-aside.png"} alt={"form-aside-image"}/>
    );
}

export default AsideImage;