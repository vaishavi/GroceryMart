import React, { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import './cost.css';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, DropdownButton, Dropdown, Button, ListGroup ,Row,Col, Container} from "react-bootstrap";
import { BsFillHeartFill } from "react-icons/bs";
import { CostContext } from '../../context/Context';


export function Cost() {
   
    const{groceryList,setGroceryList,searchitem,setSearchItem,favorites, setFavorites}=useContext(CostContext)
    const [selectedOption, setSelectedOption] = useState('');
    const [groceryData, setGroceryData] = useState([]);
    const [activeContainer, setActiveContainer] = useState(null);
    
    
    useEffect(() => {
        setGroceryData([])
        axios.get('http://localhost:5003/api/filter-groceries')
            .then(res => {
                console.log("Hi");
                console.log(res.data);
                setGroceryData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    function handleAddToFavorites(subArray) {
        console.log("Adding to favorites: ", subArray);
        setFavorites([...favorites, subArray]);
    }
   
      
        function handleOptionChange(eventKey) {
          setSelectedOption(eventKey);
          setSearchItem(eventKey)
        }
    useEffect(() => {
        const postData = async () => {
            try {
                const response = await axios.post('http://localhost:5003/api/favorites', { favorites });
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (favorites.length > 0) {
            postData();
        }
    }, [favorites]);

    function handleContainerClick(index) {
        setActiveContainer(index);
    }

   
      

    return (
        <div >
           
            <div className='shopName'>
            <DropdownButton title="Select an Item" onSelect={handleOptionChange}  variant='dark'>
       
            { groceryList.map((item1,index1)=>(
        <Dropdown.Item  eventKey={item1.text} id ={index1}>{item1.text}</Dropdown.Item>
       
       ))}
    
      </DropdownButton>
      {selectedOption==''?"":(
      <h5>You selected: {selectedOption}</h5>
      )}
    </div>
    {selectedOption==''?"":(
<Row>
    <Col>
           
         

           
            <Container>
            <h2  className='text-center' >Target</h2>
           
                {groceryData.map((subArray, index) => (

                    <div  key={index}>

                        {/* <DropdownButton title={subArray[0].storeName} onSelect={() => handleContainerClick(index)} className={activeContainer === index ? "active" : ""}>
                            <Dropdown.Item eventKey="1">Show</Dropdown.Item> */}
                        {/* {activeContainer === index && ( */}
                       
                        <div >
                     
                            <div  className='px-5' >
                                {subArray.map((grocery, index) => ( grocery.company === "Target"?( grocery.search==searchitem? (
                                    <Card key={index} className="grocery-card my-4"  style={{ width: '100%'}}>
                                    <Card.Img className='mx-auto' style={{ width: '35%' ,height:'35%'}}variant="top" src={grocery.image} alt={grocery.name} />
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>{grocery.title}</ListGroup.Item>
                                        <ListGroup.Item>${grocery.price}</ListGroup.Item>
                                    </ListGroup>
                                    <Button className="favButton" variant='dark' onClick={() => handleAddToFavorites(grocery)}><BsFillHeartFill></BsFillHeartFill></Button>
                                </Card>
                                ):''):''
                                    
                                ))}
                            </div>
                        </div>
                        {/* )}
                        </DropdownButton> */}

                    </div>
                ))}
            
           
            </Container>
            </Col>
            <Col>
           
           
          
            
            <div >
            <h2 >Walmart</h2>

                {groceryData.map((subArray, index) => (

                    <div key={index} className='px-5'>

                        {/* <DropdownButton title={subArray[0].storeName} onSelect={() => handleContainerClick(index)} className={activeContainer === index ? "active" : ""}>
                            <Dropdown.Item eventKey="1">Show</Dropdown.Item> */}
                        {/* {activeContainer === index && ( */}

                        <div >
                            <div >
                                {subArray.map((grocery, index) => ( grocery.company === "Walmart" ? ( grocery.search==searchitem? (
                                    <Card key={index} className="grocery-card my-3" style={{ width: '100%' }}>
                                    <Card.Img className='mx-auto' style={{ width: '35%' ,height:'35%'}} variant="top" src={grocery.img} alt={grocery.name} />
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>{grocery.title}</ListGroup.Item>
                                        <ListGroup.Item>${grocery.price}</ListGroup.Item>
                                    </ListGroup>
                                    <Button className="favButton" variant='dark' onClick={() => handleAddToFavorites(grocery)}><BsFillHeartFill></BsFillHeartFill></Button>
                                </Card>
                                ):''):''
                                    
                                ))}
                            </div>
                        </div>
                        {/* )}
                        </DropdownButton> */}

                    </div>
                ))}
            </div>
            </Col>
            <Col>
      

           
         
            
      
            <div >
            <h2 >Harris Teeter</h2>

                {groceryData.map((subArray, index) => (

                    <div key={index} className='px-5'>

                        {/* <DropdownButton title={subArray[0].storeName} onSelect={() => handleContainerClick(index)} className={activeContainer === index ? "active" : ""}>
                            <Dropdown.Item eventKey="1">Show</Dropdown.Item> */}
                        {/* {activeContainer === index && ( */}

                        <div>
                            <div  >
                                {subArray.map((grocery, index) => ( grocery.company === "Harris Teeter" ? (grocery.search==searchitem? (
                                    <Card key={index} className="grocery-card my-3" style={{ width: '100%' }}>
                                    <Card.Img variant="top" className='mx-auto' style={{ width: '35%' ,height:'35%'}} src={grocery.img} alt={grocery.name} />
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>{grocery.title}</ListGroup.Item>
                                        <ListGroup.Item>${grocery.price}</ListGroup.Item>
                                    </ListGroup>
                                    <Button className="favButton" variant='dark' onClick={() => handleAddToFavorites(grocery)}><BsFillHeartFill></BsFillHeartFill></Button>
                                </Card>
                                ):''):''
                                    
                                ))}
                            </div>
                        </div>
                        {/* )}
                        </DropdownButton> */}

                    </div>
                ))}
            </div>
            </Col>
            </Row>
    )}
        </div>
    );
}
