import styled from "styled-components";
import {lazy, Suspense, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData, isDataLoading, isErrorLoadingData} from "./dataSlice";
// import HomeData from "./HomeData";
const HomeData = lazy(() => import("./HomeData"));

const StyledHomePageContainer = styled.div`
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