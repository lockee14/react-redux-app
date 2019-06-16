export const loading = loading => { // provide the loading state
    return ({
        type: "loading",
        payload: loading
    });
};