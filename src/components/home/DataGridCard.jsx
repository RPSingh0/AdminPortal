import styled from "styled-components";

const StyledDataGridCardContainer = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    border: 2px solid var(--color-border);
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
    color: var(--color-text-normal);
    font-weight: bold;
    letter-spacing: 0;
`;

const StyledCardCategory = styled.p`
    font-size: 1.2rem;
    color: var(--color-text-subtitle);
`;

const StyledCardImageContainer = styled.div`
    width: 6rem;
    height: 6rem;
    border: 2px solid var(--color-border);
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
    color: var(--color-brand-normal);
    align-self: center;

    &:visited {
        color: var(--color-brand-normal);
    }
`;

const StyledCardDescription = styled.p`
    font-size: 1.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--color-text-subtitle);
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
            <StyledCardLink href={link}>
                {link}
            </StyledCardLink>
            <StyledCardDescription>
                {description}
            </StyledCardDescription>
        </StyledDataGridCardContainer>
    );
}

export default DataGridCard;