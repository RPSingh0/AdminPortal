import styled from "styled-components";

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
`;

const StyledButtonText = styled.p`
    font-size: 1.6rem;
`;

const StyledButtonIcon = styled.img`
    width: 1rem;
`;

function BackButton({text, onClick}) {

    return (
        <StyledButtonContainer onClick={onClick}>
            <StyledButtonIcon src={"./back.svg"}/>
            <StyledButtonText>
                {text}
            </StyledButtonText>
        </StyledButtonContainer>
    );
}

export default BackButton;