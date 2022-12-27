import { IItem } from './index';
import { useState } from 'react';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    if (props.sorting === 'DESC') {
        props.initialData.sort((a, b) => b.id - a.id);
    } else {
        props.initialData.sort((a, b) => a.id - b.id);
    }

    return (
        <div>
            {' '}
            {props.initialData.map((item) => {
                if (item.id == id) {
                    return (
                        <input
                            defaultValue={item.name}
                            onChange={(e) => setName(e.currentTarget.value)}
                            key={item.id}
                            onKeyDown={(e) => {
                                if (e.key == 'Enter') {
                                    item.name = name;
                                    setId(0);
                                }
                                if (e.key == 'Escape') {
                                    setId(0);
                                }
                            }}
                        />
                    );
                } else {
                    return (
                        <div onClick={() => setId(item.id)} key={item.id}>
                            {item.name}
                        </div>
                    );
                }
            })}
        </div>
    );
}
