import * as React from 'react';

type Props = {
    saveItem: (item: IItem | any) => void;
};

export const AddItem: React.FC<Props> = ({saveItem}) => {
    const [item, setItem] = React.useState<IItem | {}>();

    const handleItemData = (e: React.FormEvent<HTMLInputElement>) => {
        setItem({
            ...item,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const addNewitem = (e: React.FormEvent) => {
        e.preventDefault();
        saveItem(item);
    };

    return (
        <form onSubmit={addNewitem} className="Add-item">
            <input
                type="text"
                id="name"
                placeholder="Title"
                onChange={handleItemData}
            />
            <input
                type="text"
                id="price"
                placeholder="Description"
                onChange={handleItemData}
            />
            <button disabled={item === undefined ? true : false}>
                Add item
            </button>
        </form>
    );
};
