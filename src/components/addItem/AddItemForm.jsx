import styled from "styled-components";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputTextArea from "../../ui/InputTextArea";
import BaseButton from "../../ui/BaseButton";
import {createResourceService} from "../../services/resourceService";
import {toast} from "react-toastify";
import {useReducer, useState} from "react";
import {commonFormContainer, commonFormParentContainer, StyledFormHeading} from "../../styles/FormStyles";
import addItemFormReducer, {addItemFormInitialState} from "./addItemFormReducer";
import ErrorList from "../../ui/ErrorList";
import {generateFormData} from "../../utils/utils";

const StyledAddItemFormContainer = styled.div`
    ${commonFormParentContainer};
    padding-bottom: 6rem;
    align-self: center;
    justify-self: center;
    width: 100%;
`;


const StyledFormContainer = styled.form`
    ${commonFormContainer};
    padding-top: 6rem;
    width: 60%;
`;

function AddItemForm() {

    const [isSubmittingForm, setIsSubmittingForm] = useState(false);
    const [state, dispatch] = useReducer(addItemFormReducer, addItemFormInitialState);

    async function handleFormSubmit(event) {
        event.preventDefault();
        setIsSubmittingForm(true);

        const {title, link, iconUrl, tagName, category, description} = generateFormData(event.target);

        if (!title || !link || !iconUrl || !tagName || !category || !description) {
            toast.error("Please provide all the fields");
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
        dispatch({type: 'RESET_FORM'});
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
                    value={state.title}
                    onChange={(event) => {
                        dispatch({type: "SET_TITLE", payload: event.target.value});
                    }}
                    required
                    disabled={isSubmittingForm}
                    errors={state.errors?.title}
                />
                <InputField
                    id={"link"}
                    label={"Link"}
                    name={"link"}
                    value={state.link}
                    onChange={(event) => {
                        dispatch({type: "SET_LINK", payload: event.target.value});
                    }}
                    required
                    disabled={isSubmittingForm}
                    errors={state.errors?.link}
                />
                <InputField
                    id={"icon-url"}
                    label={"Icon Url"}
                    name={"iconUrl"}
                    value={state.iconUrl}
                    onChange={(event) => {
                        dispatch({type: "SET_ICON_URL", payload: event.target.value});
                    }}
                    required
                    disabled={isSubmittingForm}
                    errors={state.errors?.iconUrl}
                />
                <InputSelect
                    id={"tag-name"}
                    label={"Tag Name"}
                    name={"tagName"}
                    optionList={["User", "Request"]}
                    value={state.tagName}
                    onChange={(event) => {
                        dispatch({type: "SET_TAG_NAME", payload: event.target.value});
                    }}
                    required
                    disabled={isSubmittingForm}
                    errors={state.errors?.tagName}
                />
                <InputField
                    id={"category"}
                    label={"Category"}
                    name={"category"}
                    value={state.category}
                    onChange={(event) => {
                        dispatch({type: "SET_CATEGORY", payload: event.target.value});
                    }}
                    required
                    disabled={isSubmittingForm}
                    errors={state.errors?.category}
                />
                <InputTextArea
                    id={"description"}
                    label={"Description"}
                    name={"description"}
                    value={state.description}
                    onChange={(event) => {
                        dispatch({type: "SET_DESCRIPTION", payload: event.target.value});
                    }}
                    required
                    disabled={isSubmittingForm}
                    errors={state.errors?.description}
                />
                <BaseButton size={"large"} type={"submit"} disabled={isSubmittingForm}>
                    Create
                </BaseButton>
            </StyledFormContainer>
        </StyledAddItemFormContainer>
    );
}

export default AddItemForm;