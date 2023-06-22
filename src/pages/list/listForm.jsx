import React, { useState, useEffect, useRef, useContext } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, ListGroup,Form } from "react-bootstrap";
import { CostContext } from '../../context/Context';

function ListForm(props) {
    const [input, setInput] = useState('');
    const{groceryList,setGroceryList}=useContext(CostContext)
    const [groceryArray, setGroceryArray] = useState([]);
   
    const navigate = useNavigate();

    const inputRef = useRef(null);

    useEffect(() => {
        setGroceryList([])
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);



    //     const handleSubmit = async e => {
    //         e.preventDefault();

    //         // if (!input) {
    //         //     return;
    //         // }

    //         const groceryItem = {
    //             name: input
    //         };

    //         props.onSubmit({
    //             id: Math.floor(Math.random() * 10000),
    //             text: input
    //         });
    //         // try {
    //         //     await axios.post('http://localhost:5003/api/groceries', groceryItem);
    //         //     props.onSubmit(groceryItem);
    //         //     setGroceryArray([...groceryArray, groceryItem]);
    //         setInput('');
    //         // } catch (error) {
    //         //     console.error(error);
    //         // }

    //         const handleSubmit = e => {
    //     e.preventDefault();

    //     if (!input) {
    //         return;
    //     }

    //     const newGroceryItem = {
    //         id: Math.floor(Math.random() * 10000),
    //         text: input
    //     };

    //     setGroceryList([...groceryList, newGroceryItem]);
    //     setInput('');
    // };

    //     };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!input) {
            return;
        }

        const newGroceryItem = {
            id: Math.floor(Math.random() * 10000),
            text: input
        };
        const groceryItem1 = {
            searchterm: input
        };
        const b = await axios.post('http://localhost:5003/api/filter-groceries', groceryItem1);
        console.log(b.data)
        setGroceryList([...groceryList, newGroceryItem]);
        setInput('');
    };


    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleShopClick = async () => {
        try {

            // const a = await axios.post('http://localhost:5003/api/filter-groceries-res');
            // console.log(a.data)
            // setGroceryList(a.data);
            navigate('/cost')
            // show success message
        } catch (error) {
            console.error(error);
            // show error message
        }
    };

    return (
        <div>
            <form className='grocery-form' onSubmit={handleSubmit} >
                <input
                    type='text'
                    value={input}
                    name='item'
                    onChange={handleChange}
                    ref={inputRef}
                    className='grocery-input edit' />

                <button type="submit" className='grocery-button edit'>Add item</button>
            </form>
            <Form className="mb-3" >



            </Form>

            {/* <ul className="grocery-list">
                {groceryList.map((grocery, index) => (
                    <li key={grocery.id}>{grocery.text}</li>
                ))}
            </ul> */}
            <ListGroup className='GroceryList'>
                {groceryList.map((grocery, index) => (
                    <ListGroup.Item className='GroceryListItem' key={grocery.id}>{grocery.text}</ListGroup.Item>
                ))}

            </ListGroup>
            <Button onClick={handleShopClick} groceryList={groceryList} className='grocery-button edit' variant="dark" >Compare Prices</Button>

            {/* <button onClick={handleShopClick} groceryList={groceryList} className='grocery-button edit'>SHOP</button> */}
        </div>
    );


    // return (
    //     <div>
    //         <form className='grocery-form' onSubmit={handleSubmit}>
    //             <input
    //                 type='text'
    //                 value={input}
    //                 name='item'
    //                 onChange={handleChange}
    //                 ref={inputRef}
    //                 className='grocery-input edit' />

    //             <button onClick={handleSubmit} className='grocery-button edit'>Add item</button>


    //         </form>

    //     </div>
    // )
}

export default ListForm;
