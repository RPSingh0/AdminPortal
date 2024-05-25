import styled from "styled-components";

const StyledSpinnerContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const StyledLoadingSpinner = styled.div`
    width: 4rem;
    height: 4rem;
    border: 5px solid #016ec7;
    border-bottom-color: white;
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