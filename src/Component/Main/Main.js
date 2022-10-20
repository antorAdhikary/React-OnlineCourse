import React, { useState } from 'react';
import './Main.css'
import FakeData from '../../fakeData/MOCK_DATA.json'
import Course from '../Course/Course';
import Price from '../Price/Price';

const Main = () => {
    const[data, setData] = useState(FakeData);
    const[enroll, setEnroll] =useState([]);

    const handleBtn = (course) => {
        console.log('clicked', course);
        const newEnroll = [...enroll, course];
        setEnroll(newEnroll);
    }
    return (
        <div className='full-page mt-5'>
            <div className='left-side'>
                {
                    data.map(course => <Course course={course} handleBtn={handleBtn} key={course.id}></Course>)
                }
                
            </div>
            <div className='right-side'>
                <Price course={enroll}></Price>
                
            </div>
        </div>
    );
};

export default Main;