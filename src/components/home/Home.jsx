import styled from "styled-components";
import {lazy, Suspense, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData, isDataLoading, isErrorLoadingData} from "./dataSlice";
import LoadingSpinner from "../../ui/LoadingSpinner";
import ErrorFetchingData from "../../ui/ErrorFetchingData";

const HomeData = lazy(() => import("./HomeData"));

const StyledHomePageContainer = styled.div`
    padding: 2rem;
`;

function Home() {

    const dispatch = useDispatch();
    const isLoadingData = useSelector(isDataLoading);
    const isErrorLoading = useSelector(isErrorLoadingData);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <Suspense>
            <StyledHomePageContainer>
                {
                    isLoadingData && <LoadingSpinner/>
                }
                {
                    !isLoadingData && !isErrorLoading && <HomeData/>
                }
                {
                    isErrorLoading && <ErrorFetchingData message={"Error Loading Data!"}/>
                }
            </StyledHomePageContainer>
        </Suspense>
    );
}

export default Home;