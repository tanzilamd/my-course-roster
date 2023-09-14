import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("courses.json")
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
                console.log(data);
            });
    }, []);

    return (
        <div className="w-3/4">
            <h2>Courses</h2>

            <div className="grid grid-cols-3 gap-4">
                {courses.map((course, idx) => (
                    <Course key={idx} course={course}></Course>
                ))}
            </div>
        </div>
    );
};

export default Courses;
