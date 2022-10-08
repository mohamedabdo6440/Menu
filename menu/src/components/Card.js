import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';

const Cards = ({ foods }) => {
    return (
        <Row className='mt-4'>



            {

                foods.length >= 1 ? (
                    foods.map((food) => {
                        return (
                            <Col sm='12' className='mb-2' key={food.id}>
                                <Card style={{ width: '100%' }} className=" d-flex flex-row ">
                                    <Card.Img variant="top" src={food.image} style={{ width: "150px", heigth: "100px" }} />
                                    <Card.Body>
                                        <Card.Title className='d-flex justify-content-between'>
                                            <div className='item-title '> {food.title}  </div>
                                            <div className='item-price '>  {food.price}  </div>
                                        </Card.Title>
                                        <Card.Text className='py-2'>
                                            <div className='item-description '>
                                                {food.description}
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                ) : <h1 className="text-center title pt-5">لا يوجد اصناف حاليا</h1>

            }



        </Row >
    )
}

export default Cards;
