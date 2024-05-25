const GET_RESOURCE_URL = 'https://media-content.ccbp.in/website/react-assignment/resources.json';
const CREATE_RESOURCE_URL = 'https://media-content.ccbp.in/website/react-assignment/add_resource.json';

export async function getResourceService() {
    return await fetch(GET_RESOURCE_URL);
}

export async function createResourceService() {
    return await fetch(CREATE_RESOURCE_URL);
}