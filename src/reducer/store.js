import { createStore } from "redux";

const estadoInicial = {count : 0};

function reducer(state = estadoInicial, action) {

    switch (action.type) {

        case 'Increment':
            return {
                count : state.count + 1
            }
        case 'Decrement':
            return {
                count : state.count - 1
            }
        case 'Restart':
            return {
                count : 0
            }
        default:
            return state;
    }

}

export default createStore(reducer);