import styled from "styled-components";
import Logo from "./Logo";
import User from "./User";
import BaseButton from "../../ui/BaseButton";

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
    return (
        <StyledNavBar>
            <Logo/>
            <StyledNavBarFiller/>
            <BaseButton variation={'cta'} size={"medium"}>
                Add Item
            </BaseButton>
            <User/>
        </StyledNavBar>
    );
}

export default NavBar;