
import React, { useState } from 'react'
import ListForm from './listForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function ListComp({ groceries, completeGroceryList, removeGroceryList, updatedGroceryList }) {
    // const [edit, setEdit] = useState({
    //     id: null,
    //     value: ''
    // });

    // const submitUpdate = value => {
    //     updatedGroceryList(edit.id, value);
    //     setEdit({
    //         id: null,
    //         value: ''
    //     });
    // };

    // if (edit.id) {
    //     return <ListForm edit={edit} onSubmit={submitUpdate} />;
    // }

    // return Array.isArray(groceries) && groceries.map((grocery, index) => (
    //     console.log({ groceries }),
    //     <div>
    //         <ul>{grocery.text}</ul>
    //         <div className='icons'>
    //             <RiCloseCircleLine
    //                 onClick={() => removeGroceryList(grocery.id)}
    //                 className='delete-icon' />
    //             <TiEdit
    //                 onClick={() => setEdit({ id: grocery.id, value: grocery.text })}
    //                 className='edit-icon'
    //             />
    //         </div>
    //     </div>
    // ));


    const [groceryList, setGroceryList] = useState([]);


};

export default ListComp
