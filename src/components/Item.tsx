import * as React from 'react';
import {Dispatch} from 'redux';
import {useDispatch} from 'react-redux';

type Props = {
    item: IItem;
    removeItem: (item: IItem) => void;
};

export const Item: React.FC<Props> = ({item, removeItem}) => {
    const dispatch: Dispatch<any> = useDispatch();

    const deleteItem = React.useCallback(
        (item: IItem) => dispatch(removeItem(item)),

        [dispatch, removeItem],
    );

    return (
        <div className="Item" key={item.id}>
            <div>
                <h1>{item.name}</h1>
                <p>{item.price}</p>
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
