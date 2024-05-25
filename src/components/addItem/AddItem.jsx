import styled from "styled-components";
import AsideImage from "./AsideImage";
import AddItemFormContainer from "./AddItemFormContainer";

const StyledAddItemPageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-grow: 1;
    height: 100%;
    width: 100%;
`;

function AddItem() {
    return (
        <StyledAddItemPageContainer>
            <AddItemFormContainer/>
            <AsideImage/>
        </StyledAddItemPageContainer>
    );
}

export default AddItem;