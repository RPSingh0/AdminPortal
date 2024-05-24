import styled from "styled-components";

const StyledSearchDiv = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

function SearchButton() {
    return (
        <StyledSearchDiv>
            <img src={"./search.svg"} width={16}/>
        </StyledSearchDiv>
    );
}

export default SearchButton;