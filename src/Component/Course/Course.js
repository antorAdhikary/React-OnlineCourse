import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Course = (props) => {
    const {course_name, course_price, course_details } = props.course;
    return (
        <div>
            <Card style={{ width: '28rem' }} className='mb-4 '>
            <Card.Body>
                <Card.Title>
                    <h2 className='d-flex justify-content-between'>
                        <span className='fw-bold'>  {course_name}</span>
                        <span>${course_price}</span>
                    </h2>
                </Card.Title>
                <Card.Text>{course_details}</Card.Text>
                <Button onClick={() => props.handleBtn(props.course)} className='form-control ' variant="warning"> <strong>Enroll Now</strong></Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Course;