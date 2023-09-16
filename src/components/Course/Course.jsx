import "./Course.css";
import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";

const Course = ({ course, handleAddToCart }) => {
    const { title, cover, short_description, price, duration } = course;

    return (
        <div className="bg-white p-4 rounded-lg mx-4 md:mx-0">
            <img className="w-full" src={cover} alt="" />

            <div>
                <h2 className="text-xl text-[#1C1B1B] font-bold mt-2">
                    {title}
                </h2>
                <p className="text-[#1c1b1b99] text-sm text-justify mt-1">
                    {short_description}
                </p>
                <div className="flex text-[#1C1B1B] justify-between items-center my-4">
                    <div className="flex justify-between items-center gap-1">
                        <FiDollarSign />
                        <span>Price: {price}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <BsBook />
                        <span>Credit: {duration}</span>
                    </div>
                </div>
                <button
                    onClick={() => {
                        handleAddToCart(course);
                    }}
                    className="btn-select w-full py-2 font-bold"
                >
                    Select
                </button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func,
};

export default Course;
