import TabButton from "../../ui/TabButton";
import styled from "styled-components";

const StyledTabContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    border-radius: 9px;
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