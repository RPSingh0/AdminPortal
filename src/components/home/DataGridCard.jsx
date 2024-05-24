import styled from "styled-components";

const StyledDataGridCardContainer = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    border: 2px solid #d7dfe9;
    padding: 2rem;
    gap: 1rem;
    max-height: 25rem;
`;

const StyledCardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem
`;

const StyledCardHeaderData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StyledCardTitle = styled.p`
    margin: 0;
    font-size: 1.8rem;
    color: #171f46;
    font-weight: bold;
`;

const StyledCardCategory = styled.p`
    font-size: 1.2rem;
    color: #7e858e;
`;

const StyledCardImageContainer = styled.div`
    width: 6rem;
    height: 6rem;
    border: 2px solid #d7dfe9;
    padding: 0.1rem;
`;

const StyledCardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StyledCardLink = styled.a`
    font-size: 1.2rem;
    text-decoration: none;
    color: #0b69ff;
    align-self: center;

    &:visited {
        color: #0b69ff;
    }
`;

const StyledCardDescription = styled.p`
    font-size: 1.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #7e858e;
`;

function DataGridCard({cardData}) {

    const {title, icon_url, link, description, category} = cardData;

    return (
        <StyledDataGridCardContainer>
            <StyledCardHeader>
                <StyledCardImageContainer>
                    <StyledCardImage src={icon_url} alt={`${title}-icon-image`}/>
                </StyledCardImageContainer>
                <StyledCardHeaderData>
                    <StyledCardTitle>
                        {title}
                    </StyledCardTitle>
                    <StyledCardCategory>
                        {category}
                    </StyledCardCategory>
                </StyledCardHeaderData>
            </StyledCardHeader>
            <StyledCardLink href={"#"}>
                {link}
            </StyledCardLink>
            <StyledCardDescription>
                {description}
            </StyledCardDescription>
        </StyledDataGridCardContainer>
    );
}

export default DataGridCard;