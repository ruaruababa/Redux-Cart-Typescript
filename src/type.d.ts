interface IItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface ICartState {
    items: Item[];
    total: number;
}

type CartStateAction = {
    type: string;
    item: IItem;
};

type DispatchType = (args: CartStateAction) => CartStateAction;
