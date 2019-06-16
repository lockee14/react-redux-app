 
export default (state = {translated: "", loading: false}, action) => {
    switch (action.type) {
        case "translate": // change the translated text
            return {translated: action.payload, loading: state.loading}
        case "loading": // change the loading state
            return {translated: state.translated, loading: action.payload}
        default:
            return state
    }
}  