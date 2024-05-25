import styled from "styled-components";
import InputField from "../../ui/InputField";
import BaseButton from "../../ui/BaseButton";
import {useReducer, useState} from "react";
import ErrorList from "../../ui/ErrorList";
import {formHasErrors} from "../../utils/utils";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {loginUser} from "./authSlice";
import loginFormReducer, {loginFormInitialState} from "./loginFormReducer";

const StyledLoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
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
    padding-top: 3rem;
    width: 40%;

    @media (max-width: 768px) {
        width: 60%;
    }

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

function LoginFormContainer() {

    const [isSubmittingForm, setIsSubmittingForm] = useState(false);
    const [state, dispatch] = useReducer(loginFormReducer, loginFormInitialState);
    const dispatchToStore = useDispatch();

    function handleFormSubmit(event) {
        event.preventDefault();
        setIsSubmittingForm(true)

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
                    name={"userMobile"}
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