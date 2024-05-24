import styled from "styled-components";
import SearchButton from "../../ui/SearchButton";
import {useEffect, useState} from "react";

const StyledSearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    border: 1px solid #dbe3eb;
    padding: 1rem;
    width: 50%;
`;

const StyledSearchInput = styled.input`
    border: none;
    padding: 0.4rem 1rem;
    color: #252c51;
    width: 100%;

    &:focus {
        outline: none;
    }
`;

function SearchBar({inputValue, setInputValue}) {

    return (
        <StyledSearchBarContainer>
            <SearchButton/>
            <StyledSearchInput
                placeholder={"Search"}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
        </StyledSearchBarContainer>
    );
}

export default SearchBar;