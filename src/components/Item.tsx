import * as React from 'react';
import {Dispatch} from 'redux';
import {useDispatch} from 'react-redux';
import {
    removeItem,
    inCreaseQuantity,
    deCreaseQuantity,
} from '../store/actionCreators';
type Props = {
    item: IItem;
};

export const Item: React.FC<Props> = ({item}) => {
    const dispatch: Dispatch<any> = useDispatch();

    const deleteItem = React.useCallback(
        (item: IItem) => dispatch(removeItem(item)),
        [dispatch],
    );

    const inCreaseItem = React.useCallback(
        (item: IItem) => dispatch(inCreaseQuantity(item)),
        [dispatch],
    );
    const deCreaseItem = React.useCallback(
        (item: IItem) => dispatch(deCreaseQuantity(item)),
        [dispatch],
    );

    return (
        <div className="Item" key={item.id}>
            <div>
                <h1>{item.name}</h1>
                <p>{item.price}</p>
            </div>
            <div>
                <button
                    onClick={() => {
                        inCreaseItem(item);
                    }}
                >
                    +
                </button>
                <span>{item.quantity}</span>
                <button
                    onClick={() => {
                        item?.quantity > 1
                            ? deCreaseItem(item)
                            : deleteItem(item);
                    }}
                >
                    -
                </button>
            </div>
            <button
                onClick={() => {
                    deleteItem(item);
                    console.log('item', item);
                }}
            >
                Delete
            </button>
        </div>
    );
};
