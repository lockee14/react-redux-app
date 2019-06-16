export const translation = translation => { // provide the translated text
    return ({
        type: "translate",
        payload: translation
    });
};