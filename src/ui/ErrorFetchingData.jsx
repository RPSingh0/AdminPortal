import styled from "styled-components";
import {FixedPageCenterDivStyles} from "../styles/FixedPageCenterDivStyles";

const StyledErrorLoadingContainer = styled.div`
    ${FixedPageCenterDivStyles};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const StyledErrorImage = styled.img`
    width: 6rem;
`;

const StyledErrorText = styled.p`
    font-size: 1.6rem;
`;

function ErrorFetchingData({message}) {
    return (
        <StyledErrorLoadingContainer>
            <StyledErrorImage src={"./errors/broken.gif"} alt={"data-not-found-image"}/>
            <StyledErrorText>
                {message}
            </StyledErrorText>
        </StyledErrorLoadingContainer>
    );
}

export default ErrorFetchingData;