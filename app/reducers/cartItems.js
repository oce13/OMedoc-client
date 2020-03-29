const initialState = { items: [] }

function cartItems (state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'ADD_TO_CART':
            nextState = {
                ...state,
                items: [...state.items, action.payload]
              };
              return nextState;
              
        case 'REMOVE_FROM_CART':
            return state.filter(cartItem => cartItem.id !== action.payload.id);
        
        case 'REMOVE_ALL':
            return initialState;
        
        default: 
            return state
    }
}

export default cartItems;