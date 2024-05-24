import DataGridCard from "./DataGridCard";
import styled from "styled-components";
import {getDataForPage, getNumberOfPages} from "../../utils/utils";
import {useState} from "react";
import Pagination from "./Pagination";

const StyledDataGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    max-width: 100dvw;
    
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

function DataGrid({data}) {

    const maxPages = getNumberOfPages(data.length, 6);
    const [currentPage, setCurrentPage] = useState(0);

    const dataToDisplay = getDataForPage(data, currentPage);

    return (
        <>
            <StyledDataGrid>
                {dataToDisplay.map(item => <DataGridCard cardData={item} key={item.id}/>)}
            </StyledDataGrid>
            <Pagination currentPage={currentPage} changePage={setCurrentPage} maxPage={maxPages}/>
        </>
    );
}

export default DataGrid;