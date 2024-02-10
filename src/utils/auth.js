import { redirect } from "react-router-dom";

export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }
    
    return token;
}

export function checkAuthToken() {
    const token = getToken();
    if (!token) {
        return redirect('/auth')
    }
    return null;
}