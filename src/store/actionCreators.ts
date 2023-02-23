import CartActionTypes from './actionTypes';

export function addItem(item: IItem) {
    const action: CartStateAction = {
        type: CartActionTypes.ADD_TO_CART,
        item,
    };
    return action;
}

export function inCreaseQuantity(item: IItem) {
    const action: CartStateAction = {
        type: CartActionTypes.IN_CREASE_QUANTITY,
        item,
    };
    return action;
}
export function deCreaseQuantity(item: IItem) {
    const action: CartStateAction = {
        type: CartActionTypes.DE_CREASE_QUANTITY,
        item,
    };
    return action;
}
export function removeItem(item: IItem) {
    const action: CartStateAction = {
        type: CartActionTypes.REMOVE_FROM_CART,
        item,
    };
    return action;
    // return simulateHttpRequest(action);
}

// Optional - simulate HTTP request
export function simulateHttpRequest(action: CartStateAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action);
        }, 500);
    };
}
