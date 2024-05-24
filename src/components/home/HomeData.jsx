import {useState} from "react";
import {useSelector} from "react-redux";
import {getResources} from "./dataSlice";
import ResourceTab from "./ResourceTab";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const StyledHomeDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
`;

function HomeData() {

    const [currentTab, setCurrentTab] = useState('request');
    const currentTabData = useSelector(getResources(currentTab));

    console.log(currentTab, currentTabData);

    return (
        <StyledHomeDataContainer>
            <ResourceTab selectedTab={currentTab} selectTab={setCurrentTab}/>
            <SearchBar/>
        </StyledHomeDataContainer>
    );
}

export default HomeData;