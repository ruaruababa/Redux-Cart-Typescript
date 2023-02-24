import CartActionTypes from './actionTypes';

const initialState: ICartState = {
    items: [],
    total: 0,
};
const saveCartState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (e) {
        console.error(e);
    }
};
const loadCartState = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState) as any;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};
if (loadCartState() !== undefined) {
    initialState.items = loadCartState();
}
const reducer = (
    state: ICartState = initialState,
    action: CartStateAction,
): ICartState => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            const newItem: IItem = {
                id: Math.floor(Math.random() * 100),
                name: action.item.name,
                price: action.item.price,
                quantity: 1,
            };
            console.log('newItem', newItem);
            saveCartState(state.items.concat(newItem));
            return {
                ...state,
                items: state.items.concat(newItem),
            };
        case CartActionTypes.REMOVE_FROM_CART:
            const updateItems: IItem[] = state.items.filter(
                (item) => item.id !== action.item.id,
            );
            saveCartState(updateItems);
            return {
                ...state,
                items: updateItems,
            };
        case CartActionTypes.IN_CREASE_QUANTITY:
            const updateQuantity: IItem[] = state.items.map((item) => {
                if (item.id === action.item.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
            saveCartState(updateQuantity);
            return {
                ...state,
                items: updateQuantity,
            };
        case CartActionTypes.DE_CREASE_QUANTITY:
            const deCreaseQuantity: IItem[] = state.items.map((item) => {
                if (item.id === action.item.id && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            });
            saveCartState(deCreaseQuantity);
            return {
                ...state,
                items: deCreaseQuantity,
            };
    }
    return state;
};

export default reducer;
