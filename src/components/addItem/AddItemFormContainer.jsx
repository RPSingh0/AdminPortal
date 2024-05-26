import styled from "styled-components";
import BackButton from "../../ui/BackButton";
import {switchToHomePage} from "../../globalSlice";
import {useDispatch} from "react-redux";
import AddItemForm from "./AddItemForm";

const StyledAddItemFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    max-height: 100dvh;
    overflow: auto;
`;

function AddItemFormContainer() {

    const dispatch = useDispatch();

    function handleChangeToHomePage() {
        dispatch(switchToHomePage());
    }

    return (
        <StyledAddItemFormContainer>
            <BackButton text={"Users"} onClick={handleChangeToHomePage}/>
            <AddItemForm/>
        </StyledAddItemFormContainer>
    );
}

export default AddItemFormContainer;