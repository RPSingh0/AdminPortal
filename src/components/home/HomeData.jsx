import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getResources} from "./dataSlice";
import ResourceTab from "./ResourceTab";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import DataGrid from "./DataGrid";
import useDebounce from "../../hooks/useDebounce";

const StyledHomeDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
`;


function HomeData() {

    const [currentTab, setCurrentTab] = useState('resources');
    const [searchInput, setSearchInput] = useState("");
    const delayedSearch = useDebounce(searchInput, 500);
    const currentTabData = useSelector(getResources(currentTab, delayedSearch));

    return (
        <StyledHomeDataContainer>
            <ResourceTab selectedTab={currentTab} selectTab={setCurrentTab}/>
            <SearchBar inputValue={searchInput} setInputValue={setSearchInput}/>
            <DataGrid data={currentTabData} key={currentTab}/>
        </StyledHomeDataContainer>
    );
}

export default HomeData;