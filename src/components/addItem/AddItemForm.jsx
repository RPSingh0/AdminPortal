import styled from "styled-components";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputTextArea from "../../ui/InputTextArea";
import BaseButton from "../../ui/BaseButton";
import {createResourceService} from "../../services/resourceService";
import {toast} from "react-toastify";
import {useState} from "react";

const StyledAddItemFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 6rem;
    align-self: center;
    justify-self: center;
    width: 100%;
`;

const StyledFormHeading = styled.p`
    color: #171f46;
    font-size: 3rem;
`;

const StyledFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-top: 6rem;
    width: 60%;

    @media (max-width: 600px) {
        width: 80%;
    }

    @media (max-width: 425px) {
        width: 90%;
    }

    @media (max-width: 375px) {
        width: 100%;
    }
`;

function AddItemForm() {

    const [isSubmittingForm, setIsSubmittingForm] = useState(false);

    async function handleFormSubmit(event) {
        event.preventDefault();
        setIsSubmittingForm(true);

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const {title, link, iconUrl, tagName, category, description} = data;

        if (!title || !link || !iconUrl || !tagName || !category || !description) {
            toast.error("Error creating resource");
            setIsSubmittingForm(false);
            return;
        }

        const response = await createResourceService();

        if (response.status !== 200) {
            toast.error("Error creating resource");
            setIsSubmittingForm(false);
            return;
        }

        toast.success("Resource Added");
        setIsSubmittingForm(false);
        event.target.reset();
    }

    return (
        <StyledAddItemFormContainer>
            <StyledFormHeading>
                Item Details
            </StyledFormHeading>
            <StyledFormContainer onSubmit={handleFormSubmit}>
                <InputField
                    id={"title"}
                    label={"Item Title"}
                    name={"title"}
                    required
                    disabled={isSubmittingForm}
                    minLength={5}
                />
                <InputField
                    id={"link"}
                    label={"Link"}
                    name={"link"}
                    required
                    disabled={isSubmittingForm}
                    type={"url"}
                />
                <InputField
                    id={"icon-url"}
                    label={"Icon Url"}
                    name={"iconUrl"}
                    required
                    disabled={isSubmittingForm}
                    type={"url"}
                />
                <InputSelect
                    id={"tag-name"}
                    label={"Tag Name"}
                    name={"tagName"}
                    optionList={["User", "Request"]}
                    required
                    disabled={isSubmittingForm}
                />
                <InputField
                    id={"category"}
                    label={"Category"}
                    name={"category"}
                    required
                    disabled={isSubmittingForm}
                    minLength={5}
                />
                <InputTextArea
                    id={"description"}
                    label={"Description"}
                    name={"description"}
                    required
                    disabled={isSubmittingForm}
                    minLength={10}
                />
                <BaseButton size={"large"} type={"submit"} disabled={isSubmittingForm}>
                    Create
                </BaseButton>
            </StyledFormContainer>
        </StyledAddItemFormContainer>
    );
}

export default AddItemForm;