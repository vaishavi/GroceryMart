import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, DropdownButton, Dropdown, Button, ListGroup ,Row,Col,OverlayTrigger,Tooltip} from "react-bootstrap";
import './favourites.css';
import { BsFillHeartFill } from "react-icons/bs";
import { CostContext } from '../../context/Context';

export function Favorites(props) {
    
    const{groceryList,setGroceryList,searchitem,setSearchItem,favorites, setFavorites}=useContext(CostContext)
    const [favGroceryData, setFavGroceryData] = useState([]);
    const [showCloseButton, setShowCloseButton] = useState(false);
    const [targettotal,setTargetTotal]=useState(0);
    const handleMouseEnter = () => {
        setShowCloseButton(true);
      };
    
      const handleMouseLeave = () => {
        setShowCloseButton(false);
      };
    


  var total1=0
  var total2=0
  var total3=0
  const deleteHandler=(grocery)=>{
    console.log(grocery)
    console.log(favorites)
    const a = favorites.filter((item)=>item!==grocery)
    setFavorites(a)
 
  }
 


    useEffect(() => {
        console.log(favorites)
        axios.get('http://localhost:5003/api/favourites')
            .then(res => {
                setFavGroceryData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <div>
        {favorites.length==0 ? "Your Favourite Items will apear here":(
        <div className="favorites-container">
           
            <h1 className='heading'>Your favourites <BsFillHeartFill></BsFillHeartFill></h1>
                <h3> Target </h3>
                <div className='grocery-container'>
            {favorites.map((grocery, index) => (grocery.company==='Target'&&
                <div className="favorites-item" key={index}>
                   
                        {/* // <Card key={index}>
                        //     <CardImg top width="40%" src={grocery.img} alt={grocery.name} />
                       
                        //         <CardTitle tag="h5">{grocery.name}</CardTitle>
                        //         <CardText>{grocery.price}</CardText>
                        //  
                        // </Card> */}

                        <div className="grocery-card-container" key={index} >

                            {/* <DropdownButton title={subArray[0].storeName} onSelect={() => handleContainerClick(index)} className={activeContainer === index ? "active" : ""}>
                            <Dropdown.Item eventKey="1">Show</Dropdown.Item> */}
                            {/* {activeContainer === index && ( */}

                            < div className='grocery-card-scroll-container' >
                                <div className="grocery-card-scroll">
                                   
                                        <Card key={index}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="grocery-card" style={{ width: '18rem' }}>
                                       
                                            <CardImg top width="30%" height="40%" variant="top" src={grocery.image} alt={grocery.name} />
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Close</Tooltip>}>
                                            <button type="button" className={`btn-close ${showCloseButton ? 'd-block' : 'd-none'}`} onClick={()=>deleteHandler(grocery)} style={{
            position: 'absolute',
            top: '25px',
            right: '25px',
            zIndex: 1,
          }} > </button>
                                            </OverlayTrigger>
                                            <ListGroup variant="flush">
                                          
                                                <ListGroup.Item>{grocery.title}</ListGroup.Item>
                                              <p hidden>{total1=total1+grocery.price}</p>
                                                <ListGroup.Item>${grocery.price} {" "}</ListGroup.Item>

                                            </ListGroup>

                                        </Card>
                                       
                                </div>
                            </div>
                            {/* )}
                        </DropdownButton> */}

                        </div>
                 
                </div>
            ))} 
                       
                

             </div>
             <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
             <Col><h4>Total: ${Math.round(total1 * 100)/100} </h4></Col>
             </Row>


             <h3 className='my-2'> Walmart</h3>
                <div className='grocery-container'>
            {favorites.map((grocery, index) => (grocery.company==='Walmart'&&
                <div className="favorites-item" key={index}>
                   
                        {/* // <Card key={index}>
                        //     <CardImg top width="40%" src={grocery.img} alt={grocery.name} />
                       
                        //         <CardTitle tag="h5">{grocery.name}</CardTitle>
                        //         <CardText>{grocery.price}</CardText>
                        //  
                        // </Card> */}

                        <div className="grocery-card-container" key={index} >

                            {/* <DropdownButton title={subArray[0].storeName} onSelect={() => handleContainerClick(index)} className={activeContainer === index ? "active" : ""}>
                            <Dropdown.Item eventKey="1">Show</Dropdown.Item> */}
                            {/* {activeContainer === index && ( */}

                            < div className='grocery-card-scroll-container' >
                                <div className="grocery-card-scroll">
                                   
                                        <Card key={index}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="grocery-card" style={{ width: '18rem' }}>
                                           
                                            <Card.Img top width="30%" height="40%" variant="top" src={grocery.img} alt={grocery.name} />

                                        
                                       <OverlayTrigger placement="top" overlay={<Tooltip>Close</Tooltip>}>
                                       <button type="button" className={`btn-close ${showCloseButton ? 'd-block' : 'd-none'}`} onClick={()=>deleteHandler(grocery)} style={{
       position: 'absolute',
       top: '25px',
       right: '25px',
       zIndex: 1,
     }} > </button>
                                       </OverlayTrigger>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>{grocery.title}</ListGroup.Item>
                                                <p hidden>{total3=total3+grocery.price}</p>
                                                <ListGroup.Item>${grocery.price}  {" "}</ListGroup.Item>

                                            </ListGroup>

                                        </Card>
                                  
                                </div>
                            </div>
                            {/* )}
                        </DropdownButton> */}

                        </div>
                 
                </div>
            ))}
             </div>

             <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
             <Col><h4>Total:${Math.round(total3 * 100)/100}</h4></Col>
             </Row>


             <h3> Harris Teeter</h3>
                <div className='grocery-container'>
            {favorites.map((grocery, index) => (grocery.company==='Harris Teeter'&&
                <div className="favorites-item" key={index}>
                   
                        {/* // <Card key={index}>
                        //     <CardImg top width="40%" src={grocery.img} alt={grocery.name} />
                       
                        //         <CardTitle tag="h5">{grocery.name}</CardTitle>
                        //         <CardText>{grocery.price}</CardText>
                        //  
                        // </Card> */}

                        <div className="grocery-card-container" key={index} >

                            {/* <DropdownButton title={subArray[0].storeName} onSelect={() => handleContainerClick(index)} className={activeContainer === index ? "active" : ""}>
                            <Dropdown.Item eventKey="1">Show</Dropdown.Item> */}
                            {/* {activeContainer === index && ( */}

                            < div className='grocery-card-scroll-container' >
                                <div className="grocery-card-scroll">
                                   
                                        <Card key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="grocery-card" style={{ width: '18rem' }}>
                                           
                                            <Card.Img top width="30%" height="40%" variant="top" src={grocery.img} alt={grocery.name} />
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Close</Tooltip>}>
                                       <button type="button" className={`btn-close ${showCloseButton ? 'd-block' : 'd-none'}`} onClick={()=>deleteHandler(grocery)} style={{
       position: 'absolute',
       top: '25px',
       right: '25px',
       zIndex: 1,
     }} > </button>
                                       </OverlayTrigger>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>{grocery.title}</ListGroup.Item>
                                                <p hidden>{total2=total2+grocery.price}</p>
                                                <ListGroup.Item>${grocery.price} {" "}</ListGroup.Item>
                                            </ListGroup>

                                        </Card>
                                  
                                </div>
                            </div>
                            {/* )}
                        </DropdownButton> */}

                        </div>
                 
                </div>
            ))}
             </div>
             <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
             <Col><h4>Total: ${Math.round(total2* 100)/100} </h4></Col>
             </Row>







        </div>
        )}
        </div>
    );
}

