import {StyledButtonContainer, StyledButtonIcon, StyledButtonText} from "../styles/PaginationButtonStyles";

function NextButton({text, onClick}) {
    return (
        <StyledButtonContainer onClick={onClick}>
            <StyledButtonText>
                {text}
            </StyledButtonText>
            <StyledButtonIcon src={"./next.svg"}/>
        </StyledButtonContainer>
    );
}

export default NextButton;