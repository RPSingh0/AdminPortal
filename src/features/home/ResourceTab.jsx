import TabButton from "../../ui/TabButton";
import styled from "styled-components";

const StyledTabContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 60%;
    border-radius: 9px;
    align-self: center;

    @media (max-width: 1024px) {
        width: 80%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

function ResourceTab({selectedTab, selectTab}) {

    function handleSelectTab(tab) {
        selectTab(tab);
    }

    return (
        <StyledTabContainer>
            <TabButton text={"Resources"} selected={selectedTab === 'resources'}
                       onClick={() => handleSelectTab('resources')}/>
            <TabButton text={"Requests"} selected={selectedTab === 'request'}
                       onClick={() => handleSelectTab('request')}/>
            <TabButton text={"Users"} selected={selectedTab === 'user'}
                       onClick={() => handleSelectTab('user')}/>
        </StyledTabContainer>
    );
}

export default ResourceTab;