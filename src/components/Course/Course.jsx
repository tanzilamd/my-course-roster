import "./Course.css";
import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";

const Course = ({ course }) => {
    const { title, cover, short_description, price, duration } = course;
    console.log(course);
    return (
        <div className="bg-white p-4 rounded-lg">
            <img className="w-full" src={cover} alt="" />

            <div className="space-y-4">
                <h2 className="text-lg text-[#1C1B1B] font-bold mt-2">
                    {title}
                </h2>
                <p className="text-[#1c1b1b99] text-sm">{short_description}</p>
                <div className="flex text-[#1C1B1B] justify-between items-center mb-4">
                    <div className="flex justify-between items-center gap-1">
                        <FiDollarSign />
                        <span>Price: {price}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <BsBook />
                        <span>Credit: {duration}</span>
                    </div>
                </div>
                <button className="btn-select w-full py-2 font-bold">
                    Select
                </button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
};

export default Course;
