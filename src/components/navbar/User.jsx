import styled from "styled-components";
import {useDispatch} from "react-redux";
import {logoutUser} from "../auth/authSlice";
import {toast} from "react-toastify";

const StyledUserImageContainer = styled.div`
    height: 100%;

    &:hover {
        cursor: pointer;
    }
`;

const StyledUserImage = styled.img`
    object-fit: cover;
    width: 4rem;
    height: 100%;
    border-radius: 100%;
`;

function User() {

    const dispatch = useDispatch();

    function handleUserLogout() {
        dispatch(logoutUser());
        toast.success("User logged out")
    }

    return (
        <StyledUserImageContainer onClick={handleUserLogout}>
            <StyledUserImage src={"./user/logged-in-user.png"} alt={"user-image"}/>
        </StyledUserImageContainer>
    );
}

export default User;