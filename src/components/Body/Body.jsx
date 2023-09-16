import PropTypes from "prop-types";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Courses from "../Courses/Courses";
import Cart from "../Cart/Cart";

const Body = () => {
    const [cartItems, setCartItems] = useState([]);
    const [remainingHours, setRemainingHours] = useState(20);
    const [totalCredits, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Warnings
    const notifySimilarItem = () => {
        toast.error("You have already added this!");
    };
    const notifyRemainingHours = () => {
        toast.error("You don't have sufficient credit!");
    };

    // Success
    const notifyCourseAdded = () => {
        toast.success("Course added!");
    };

    const handleAddToCart = (course) => {
        if (cartItems.find((item) => item.id == course.id) !== undefined) {
            notifySimilarItem();
        } else if (
            course.duration > remainingHours ||
            20 - totalCredits < course.duration
        ) {
            notifyRemainingHours();
        } else {
            // System of adding a object to array
            const newCartItems = [...cartItems, course];

            setCartItems(newCartItems);

            // Remaining Hours
            setRemainingHours(remainingHours - course.duration);

            // total credit
            setTotalCredit(totalCredits + course.duration);

            // total price
            setTotalPrice(totalPrice + course.price);

            notifyCourseAdded();
        }
    };

    console.log(cartItems);

    return (
        <div>
            <ToastContainer theme="colored" />;
            <div className="flex flex-col-reverse lg:flex lg:flex-row gap-2 container mx-auto mb-10">
                <Courses handleAddToCart={handleAddToCart}></Courses>
                <Cart
                    cartItems={cartItems}
                    remainingHours={remainingHours}
                    totalCredits={totalCredits}
                    totalPrice={totalPrice}
                ></Cart>
            </div>
        </div>
    );
};

export default Body;
