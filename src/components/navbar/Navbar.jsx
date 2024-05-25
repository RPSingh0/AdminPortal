import styled from "styled-components";
import Logo from "./Logo";
import User from "./User";
import BaseButton from "../../ui/BaseButton";
import {useDispatch, useSelector} from "react-redux";
import {getIsOnAddItemPage, switchToAddItemPage} from "../../globalSlice";
import {isUserLoggedIn} from "../auth/authSlice";

const StyledNavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    height: 6rem;
    padding: 1rem;
    border-bottom: solid 1px lightgrey;
`;

const StyledNavBarFiller = styled.div`
    flex-grow: 1;
`;

function NavBar() {

    const dispatch = useDispatch();
    const isAddItemPage = useSelector(getIsOnAddItemPage);
    const isLoggedIn = useSelector(isUserLoggedIn);

    function handleChangeToAddItemPage() {
        dispatch(switchToAddItemPage());
    }

    return (
        <StyledNavBar>
            <Logo/>
            <StyledNavBarFiller/>
            {!isAddItemPage && isLoggedIn &&
                <>
                    <BaseButton variation={'secondary'} size={"medium"} onClick={handleChangeToAddItemPage}>
                        Add Item
                    </BaseButton>
                    <User/>
                </>
            }
        </StyledNavBar>
    );
}

export default NavBar;