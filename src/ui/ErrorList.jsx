import styled from "styled-components";

const StyledErrorUnOrderedList = styled.ul`
    align-self: start;
    padding-left: 1rem;
`;

const StyledErrorListItem = styled.li`
    color: var(--color-text-error);
`;

function ErrorList({errors}) {
    return (
        <StyledErrorUnOrderedList>
            {
                errors.map((error, index) =>
                    <StyledErrorListItem key={index}>
                        {error}
                    </StyledErrorListItem>
                )
            }
        </StyledErrorUnOrderedList>
    );
}

export default ErrorList;