import {useState} from "react";
import {useSelector} from "react-redux";
import {getResources} from "./dataSlice";
import ResourceTab from "./ResourceTab";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import DataGrid from "./DataGrid";
import useDebounce from "../../hooks/useDebounce";

const StyledHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 1rem;
`;

const StyledHomeDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 80%;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

function HomeData() {

    const [currentTab, setCurrentTab] = useState('resources');
    const [searchInput, setSearchInput] = useState("");
    const delayedSearch = useDebounce(searchInput, 500);
    const currentTabData = useSelector(getResources(currentTab, delayedSearch));

    return (
        <StyledHomeContainer>
            <ResourceTab selectedTab={currentTab} selectTab={setCurrentTab}/>
            <StyledHomeDataContainer>
                <SearchBar inputValue={searchInput} setInputValue={setSearchInput}/>
                <DataGrid data={currentTabData} key={currentTab}/>
            </StyledHomeDataContainer>
        </StyledHomeContainer>
    );
}

export default HomeData;