
import React, { Component ,useContext} from "react";
// import { HeartStraight, ListPlus, ShoppingCart } from "phosphor-react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import { CostContext } from '../context/Context'
import "./navbar.css"



export function  NavigationBar () {
    
    const{groceryList,setGroceryList,searchitem,setSearchItem,favorites, setFavorites}=useContext(CostContext)
 
    var a = favorites.length
    
     
        return (
            <Navbar className=" navbar navbar-expand-lg navbar-light bg-light" >
                <Container>
                    <Navbar.Brand>GroceryMart</Navbar.Brand>
                    <Nav className="ms-auto my-2 my-lg-0">
                        < div className="links" >
                            {/* <ListPlus size={"18"} /> */}
                            <LinkContainer to='/'>
                            < Nav.Link >List</Nav.Link >
                            </LinkContainer>
                        </div >
                        <div className="links">
                            {/* <ShoppingCart size={"18"} /> */}
                            <LinkContainer to='/cost'>
                            <Nav.Link >Compare</Nav.Link>
                            </LinkContainer>
                        </div>
                        <div className="links">
                            {/* <HeartStraight size={"18"} /> */}
                            <LinkContainer to='/favourites'>
                            <Nav.Link >Favourites{a===0?'':`(${a})`}</Nav.Link>
                            </LinkContainer>
                        </div>
                    </Nav >
                </Container >
            </Navbar >

        );
    

}