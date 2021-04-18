
const baseURL = process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000/" : "https://api.benwaltz.com/"


export const contactURL = `${baseURL}ben/contact/`
export const reviewCreateURL = `${baseURL}ben/reviews-create/`
export const reviewListURL = `${baseURL}ben/review-list/`
export const reviewListHomeURL = `${baseURL}ben/review-list-home/`



