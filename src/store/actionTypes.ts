enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    IN_CREASE_QUANTITY = 'IN_CREASE_QUANTITY',
    DE_CREASE_QUANTITY = 'DE_CREASE_QUANTITY',
}
// interface AddToCartAction {
//     type: CartActionTypes.ADD_TO_CART;
//     payload: IItem;
// }

// interface RemoveFromCartAction {
//     type: CartActionTypes.REMOVE_FROM_CART;
//     payload: number; // ID of item to remove
// }

// type CartAction = AddToCartAction | RemoveFromCartAction;

export default CartActionTypes;
