import * as React from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import './styles.css';

import {Item} from './components/Item';
import {AddItem} from './components/AddItems';

import {Dispatch} from 'redux';
import {addItem} from './store/actionCreators';
const App: React.FC = () => {
    //To get cart items from redux store
    const items: readonly IItem[] = useSelector(
        (state: ICartState) => state.items,
        shallowEqual,
    );
    React.useEffect(() => {}, [items]);
    const dispatch: Dispatch<any> = useDispatch();
    const saveItem = React.useCallback(
        (item: IItem) => dispatch(addItem(item)),
        [dispatch],
    );
    return (
        <main>
            <h1>Add item</h1>
            <AddItem saveItem={saveItem} />
            {items.map((item: IItem) => (
                <Item key={item.id} item={item} />
            ))}
            <div>
                total:{' '}
                {items.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0,
                )}
            </div>
        </main>
    );
};

export default App;
