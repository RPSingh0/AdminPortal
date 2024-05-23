import styled from "styled-components";

const StyledUserImageContainer = styled.div`
    height: 100%;
`;

const StyledUserImage = styled.img`
    object-fit: scale-down;
    height: 100%;
    border-radius: 100%;
`;

function User() {
    return (
        <StyledUserImageContainer>
            <StyledUserImage src={"./user/user-fallback.png"} alt={"user-image"}/>
        </StyledUserImageContainer>
    );
}

export default User;