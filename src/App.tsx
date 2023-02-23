import * as React from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import './styles.css';

import {Item} from './components/Item';
import {AddItem} from './components/AddItems';
import {addItem, removeItem} from './store/actionCreators';
import {Dispatch} from 'redux';

const App: React.FC = () => {
    const items: readonly IItem[] = useSelector(
        (state: ICartState) => state.items,
        shallowEqual,
    );

    const dispatch: Dispatch<any> = useDispatch();

    const saveItem = React.useCallback(
        (item: IItem) => dispatch(addItem(item)),
        [dispatch],
    );

    // My blog: https://www.ibrahima-ndaw.com/

    return (
        <main>
            <h1>Add item</h1>
            <AddItem saveItem={saveItem} />
            {items.map((item: IItem) => (
                <Item key={item.id} item={item} removeItem={removeItem} />
            ))}
        </main>
    );
};

export default App;
