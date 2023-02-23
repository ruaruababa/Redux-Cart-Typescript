import CartActionTypes from './actionTypes';

export function addItem(item: IItem) {
    const action: CartStateAction = {
        type: CartActionTypes.ADD_TO_CART,
        item,
    };

    return simulateHttpRequest(action);
}

export function removeItem(item: IItem) {
    const action: CartStateAction = {
        type: CartActionTypes.REMOVE_FROM_CART,
        item,
    };
    return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: CartStateAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action);
        }, 500);
    };
}
