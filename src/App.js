import Navbar from "./components/navbar/Navbar";
import AppLayout from "./components/appLayout/AppLayout";
import styled from "styled-components";

const StyledAppContainer = styled.div`
    max-width: 100dvw;
`;

function App() {

    return (
        <StyledAppContainer>
            <Navbar/>
            <AppLayout/>
        </StyledAppContainer>
    );
}

export default App;
