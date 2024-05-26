import styled from "styled-components";
import NextButton from "../../ui/NextButton";
import BackButton from "../../ui/BackButton";

const StyledPaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const StyledCurrentPageNumber = styled.p`
    font-size: 1.6rem;
`;

function Pagination({currentPage, changePage, maxPage}) {

    function handleClickNext() {
        if (currentPage === maxPage - 1) {
            return;
        }

        changePage(value => value + 1);
    }

    function handleClickBack() {
        if (currentPage === 0) {
            return;
        }

        changePage(value => value - 1);
    }

    return (
        <StyledPaginationContainer>
            <BackButton text={"Back"} onClick={handleClickBack}/>
            <StyledCurrentPageNumber>
                Page {currentPage + 1} of {maxPage}
            </StyledCurrentPageNumber>
            <NextButton text={"Next"} onClick={handleClickNext}/>
        </StyledPaginationContainer>
    );
}

export default Pagination;