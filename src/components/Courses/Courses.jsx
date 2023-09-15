import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ handleAddToCart }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("courses.json")
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
            });
    }, []);

    return (
        <div className="w-3/4">
            <div className="grid grid-cols-3 gap-4">
                {courses.map((course, idx) => (
                    <Course
                        key={idx}
                        course={course}
                        handleAddToCart={handleAddToCart}
                    ></Course>
                ))}
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleAddToCart: PropTypes.func,
};

export default Courses;
