import axios from 'axios';

const ROOT_URL = `http://127.0.0.1:3000/salesforceservice`;


export const FETCH_SOBJECT_DESCRIPTIONS = 'FETCH_WETHER';

export function fetchDescriptions(userData) {
    const url = ROOT_URL;
    const data = {
        password: userData.password,
        username: userData.username
    }
    const request = axios.post(url, data);

    return {
        type: FETCH_SOBJECT_DESCRIPTIONS,
        payload: request
    }
}