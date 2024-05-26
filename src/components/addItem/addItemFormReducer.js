import {validateLength, validateLink, validateTagName} from "../../utils/utils";

export const addItemFormInitialState = {
    title: '',
    link: '',
    iconUrl: '',
    tagName: 'user',
    category: '',
    description: '',
    errors: {}
}

const ALLOWED_TAG_NAMES = ['user', 'request']

const addItemFormReducer = function (state, action) {
    switch (action.type) {
        case 'SET_TITLE':
            const titleErrors = validateLength(action.payload, 5);
            return {
                ...state,
                title: action.payload,
                errors: {...state.errors, title: titleErrors}
            }

        case 'SET_LINK':
            const linkErrors = validateLink(action.payload);
            return {
                ...state,
                link: action.payload,
                errors: {...state.errors, link: linkErrors}
            }

        case 'SET_ICON_URL':
            const iconUrlErrors = validateLink(action.payload);
            return {
                ...state,
                iconUrl: action.payload,
                errors: {...state.errors, iconUrl: iconUrlErrors}
            }

        case 'SET_TAG_NAME':
            const tagNameErrors = validateTagName(action.payload, ALLOWED_TAG_NAMES);
            return {
                ...state,
                tagName: action.payload,
                errors: {...state.errors, tagName: tagNameErrors}
            }

        case 'SET_CATEGORY':
            const categoryErrors = validateLength(action.payload, 5);
            return {
                ...state,
                category: action.payload,
                errors: {...state.errors, category: categoryErrors}
            }

        case 'SET_DESCRIPTION':
            const descriptionErrors = validateLength(action.payload, 10);
            return {
                ...state,
                description: action.payload,
                errors: {...state.errors, description: descriptionErrors}
            }

        case 'RESET_FORM':
            return addItemFormInitialState;

        default:
            return state;
    }
}

export default addItemFormReducer;