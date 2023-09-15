import PropTypes from "prop-types";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Courses from "../Courses/Courses";
import Cart from "../Cart/Cart";

const Body = () => {
    const [cartItems, setCartItems] = useState([]);
    const [remainingHours, setRemainingHours] = useState(20);

    // Warnings
    const notifySimilarItem = () => {
        toast.error("You have already added this!");
    };
    const notifyRemainingHours = () => {
        toast.error("You don't have sufficient credit!");
    };

    const handleAddToCart = (course) => {
        if (cartItems.find((item) => item.id == course.id) !== undefined) {
            console.log("similar item exists");

            notifySimilarItem();
        } else if (course.duration > remainingHours) {
            notifyRemainingHours();
        } else {
            // System of adding a object to array
            const newCartItems = [...cartItems, course];

            setCartItems(newCartItems);

            // Remaining Hours
            setRemainingHours(remainingHours - course.duration);
        }
    };

    console.log(cartItems);

    return (
        <div>
            <ToastContainer theme="colored" />;
            <div className="flex flex-col-reverse md:flex md:flex-row gap-2 container mx-auto mb-10">
                <Courses handleAddToCart={handleAddToCart}></Courses>
                <Cart
                    cartItems={cartItems}
                    remainingHours={remainingHours}
                ></Cart>
                {/* <div>
                    {cartItems.map((item) => (
                        <li>{item.title}</li>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Body;
