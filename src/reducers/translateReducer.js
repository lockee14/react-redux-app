export default (state = {translated: "", loading: false}, action) => {
    switch (action.type) {
        case "translate":
            return {translated: action.payload, loading: state.loading}
        case "loading":
            return {translated: state.translated, loading: action.payload}
        default:
            return state
    }
}  