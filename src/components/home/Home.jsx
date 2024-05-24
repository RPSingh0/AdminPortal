import styled from "styled-components";
import {lazy, Suspense, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData, isDataLoading, isErrorLoadingData} from "./dataSlice";
const HomeData = lazy(() => import("./HomeData"));

const StyledHomePageContainer = styled.div`
    padding: 2rem;
`;

function Home() {

    const dispatch = useDispatch();
    const isLoadingData = useSelector(isDataLoading);
    const isErrorLoading = useSelector(isErrorLoadingData);

    console.log('loading', isLoadingData);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <Suspense>
            <StyledHomePageContainer>
                {
                    isLoadingData && <p>Loading...</p>
                }
                {
                    !isLoadingData && !isErrorLoading && <HomeData/>
                }
                {
                    isErrorLoading && <p>Error !!</p>
                }
            </StyledHomePageContainer>
        </Suspense>
    );
}

export default Home;