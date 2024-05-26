import Navbar from "./features/navbar/Navbar";
import AppLayout from "./features/appLayout/AppLayout";
import styled from "styled-components";

const StyledAppContainer = styled.div`
    max-width: 100dvw;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
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
