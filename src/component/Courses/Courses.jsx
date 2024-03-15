import { useEffect, useState } from "react";
import Course from "../Course/Course";



const Courses = ({handleAddToCart}) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // console.log(courses);

    return (
        <div className='grid grid-cols-3 gap-5 '>
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handleAddToCart={handleAddToCart}
                ></Course>)
            }
        </div>
    );
};

export default Courses;