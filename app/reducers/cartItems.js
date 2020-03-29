const initialState = { items: [] }

function cartItems(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'ADD_TO_CART':
            nextState = {
                ...state,
                items: [...state.items, action.payload]
            };
            return nextState;

        case 'REMOVE_FROM_CART':
            return {
                items: state.items.filter(item =>
                    item.id !== action.payload.id
                )
            };

        case 'UPDATE_CART':
            nextState = {
                ...state,
                items: state.items.filter(item =>
                    item.id !== action.payload.id)
            };

            const finalState = {
                ...state,
                items: [...state.items, action.payload]
            };

            return finalState;

        case 'REMOVE_ALL':
            return initialState;

        default:
            return state
    }
}

const removeFromCart = (index) => {
    return {
        type: 'REMOVE_FROM_CART',
        index
    }
}

export default cartItems;