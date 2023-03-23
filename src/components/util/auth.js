import axios from "axios";

const API_KEY = ''

export async function login(email, password) {
    const url = '';

    axios.post(url + API_KEY, {
        email: email,
        password: password,
        returnSecureToken: true
    }).then(response => {
        const token = response.data.idToken;

        return token;
    }).catch(error => {
        console.log('auth.js error', error);
    })
}