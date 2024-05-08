import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/cources";

export function getCourses() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function saveCourse(cource) {
    return fetch(baseUrl + (cource.id || ""), {
        method: cource.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cource)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteCourse(courceId) {
    return fetch(baseUrl + courceId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}