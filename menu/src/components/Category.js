import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';

const Category = ({ FilterCategory, allCtegory }) => {

    const onFilter = (cat) => {
        FilterCategory(cat)
    }

    return (
        <Row>
            <Col sm='12' className="d-flex justify-content-center">

                {
                    allCtegory.map((c) => {
                        return (
                            <div>
                                <Button onClick={() => onFilter(c)} className='btn mx-2'>{c}</Button>


                            </div>
                        )
                    })
                }

            </Col>
        </Row>
    )
}

export default Category;
