import styled from "styled-components";
import InputField from "../../ui/InputField";
import BaseButton from "../../ui/BaseButton";
import {useReducer, useState} from "react";
import ErrorList from "../../ui/ErrorList";
import {formHasErrors, generateFormData} from "../../utils/utils";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {loginUser} from "./authSlice";
import loginFormReducer, {loginFormInitialState} from "./loginFormReducer";
import {commonFormContainer, commonFormParentContainer, StyledFormHeading} from "../../styles/FormStyles";

const StyledLoginFormContainer = styled.div`
    ${commonFormParentContainer};
    padding: 2rem;
`;


const StyledFormContainer = styled.form`
    ${commonFormContainer};
    padding-top: 3rem;
    width: 40%;

    @media (max-width: 768px) {
        width: 60%;
    }
`;

function LoginFormContainer() {

    const [isSubmittingForm, setIsSubmittingForm] = useState(false);
    const [state, dispatch] = useReducer(loginFormReducer, loginFormInitialState);
    const dispatchToStore = useDispatch();

    function handleFormSubmit(event) {
        event.preventDefault();
        setIsSubmittingForm(true)

        const {userName, mobileNumber, password} = generateFormData(event.target);

        if (!userName || !mobileNumber || !password) {
            toast.error("Please provide all the fields");
            setIsSubmittingForm(false);
            return;
        }

        if (state.userName === "ProjectUser1" && state.mobileNumber === "9988998899" && state.password === "AdminPass@#") {
            dispatchToStore(loginUser({
                userName: state.userName,
                userMobile: state.mobileNumber,
                userPassword: state.password
            }));
            toast.success("User logged in");
            return;
        }

        setIsSubmittingForm(false);
        toast.error("The combination of username, mobile and password is not correct");
    }

    return (
        <StyledLoginFormContainer>
            <StyledFormHeading>
                Login
            </StyledFormHeading>
            <StyledFormContainer onSubmit={handleFormSubmit}>
                <InputField
                    id={"user-name"}
                    label={"User Name"}
                    name={"userName"}
                    value={state.userName}
                    onChange={(event) => {
                        dispatch({type: "SET_USERNAME", payload: event.target.value});
                    }}
                    placeholder={"Use - ProjectUser1"}
                    required
                    disabled={isSubmittingForm}
                    minLength={5}
                />
                {
                    state.errors?.userName && <ErrorList errors={state.errors?.userName}/>
                }
                <InputField
                    id={"mobile-number"}
                    label={"Mobile Number"}
                    name={"mobileNumber"}
                    value={state.mobileNumber}
                    onChange={(event) => {
                        dispatch({type: "SET_MOBILE_NUMBER", payload: event.target.value});
                    }}
                    placeholder={"Use - 9988998899"}
                    type={"number"}
                    required
                    disabled={isSubmittingForm}
                    minLength={10}
                    maxLength={10}
                />
                {
                    state.errors?.mobileNumber && <ErrorList errors={state.errors?.mobileNumber}/>
                }
                <InputField
                    id={"password"}
                    label={"Password"}
                    name={"password"}
                    placeholder={"Use - AdminPass@#"}
                    value={state.password}
                    onChange={(event) => {
                        dispatch({type: "SET_PASSWORD", payload: event.target.value});
                    }}
                    required
                    disabled={isSubmittingForm}
                    type={"password"}
                />
                {
                    state.errors?.password && <ErrorList errors={state.errors?.password}/>
                }
                <BaseButton size={"large"} type={"submit"} disabled={isSubmittingForm || formHasErrors(state.errors)}>
                    Login
                </BaseButton>
            </StyledFormContainer>
        </StyledLoginFormContainer>
    );
}

export default LoginFormContainer;