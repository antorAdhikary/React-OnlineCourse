import React from 'react';

const Price = (props) => {
   const enroll = props.course;

   let total = 0;
   for (let i = 0; i < enroll.length; i++) {
    const course = enroll[i];
    total = total + course.course_price
   }
    return (
        <div>
            <h1>Enrolled Course: {enroll.length}</h1>
            <h2>Total fee : {total}</h2>
        </div>
    );
};

export default Price;