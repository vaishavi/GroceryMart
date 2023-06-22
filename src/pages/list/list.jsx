import React, { useState } from 'react';
import ListForm from './listForm';
import ListComp from './listComp';
import './list.css';
import axios from 'axios';

export function List(props) {
    const [groceries, setGroceries] = useState([]);

    const addGrocery = async (grocery) => {

        if (!grocery.text || /^\s*$/.test(grocery.text)) {
            console.log("hi")
            return;
        }

        try {
            const response = await axios.post('http://localhost:5003/api/groceries', { name: grocery.text });

            setGroceries(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    const updatedGroceryList = (groceryid, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setGroceries((prev) =>
            prev.map((item) => (item._id === groceryid ? { ...item, name: newValue.text } : item))
        );
    };


    const removeGroceryList = async id => {
        try {
            const response = await axios.post('http://localhost:5003/api/remove-grocery', { id });
            setGroceries(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const completeGroceryList = async id => {
        try {
            const response = await axios.post('http://localhost:5003/api/complete-grocery', { id });
            setGroceries(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1 className='heading'>Add items to buy</h1>
            <ListForm onSubmit={addGrocery} />
            <ListComp groceries={groceries}
                completeGroceryList={completeGroceryList}
                removeGroceryList={removeGroceryList}
                updatedGroceryList={updatedGroceryList} />
        </div>
    );
}
