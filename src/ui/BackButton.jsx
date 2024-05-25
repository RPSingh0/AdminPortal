import {StyledButtonContainer, StyledButtonIcon, StyledButtonText} from "../styles/PaginationButtonStyles";

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