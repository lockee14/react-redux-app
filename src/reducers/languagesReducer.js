import { english } from "../lang/en" // default language

// change the language of the app with the provided language in  action.payload
export default (state = english, action) => {
    switch (action.type) {
        case "language":
            return action.payload;
        default:
            return state
    }
}  
