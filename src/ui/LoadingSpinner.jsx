import styled from "styled-components";
import {FixedPageCenterDivStyles} from "../styles/FixedPageCenterDivStyles";

const StyledSpinnerContainer = styled.div`
    ${FixedPageCenterDivStyles};
`;

const StyledLoadingSpinner = styled.div`
    width: 4rem;
    height: 4rem;
    border: 5px solid var(--color-brand-normal);
    border-bottom-color: var(--color-whitesmoke);
    border-radius: 50%;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

function LoadingSpinner() {
    return (
        <StyledSpinnerContainer>
            <StyledLoadingSpinner/>
        </StyledSpinnerContainer>
    );
}

export default LoadingSpinner;