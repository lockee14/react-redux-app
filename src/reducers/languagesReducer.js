import { english } from "../lang/en"

export default (state = english, action) => {
    switch (action.type) {
        case "language":
            return action.payload;
        default:
            return state
    }
}  
