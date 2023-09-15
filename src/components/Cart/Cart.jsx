import PropTypes from "prop-types";

const Cart = ({ cartItems, remainingHours, totalCredits, totalPrice }) => {
    return (
        <div className="w-full md:w-1/4 bg-white box-border inline-block h-fit p-4 rounded-lg mb-6 md:mb-0">
            <h2 className="text-[#2F80ED] font-bold text-lg">
                Credit Hour Remaining {remainingHours} hr
            </h2>

            <hr className="my-4" />

            <h2 className="text-[#1C1B1B] font-bold text-xl mb-2">
                Course Name
            </h2>
            <ul className="text-[#1c1b1b99] space-y-2">
                {cartItems.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>

            <hr className="my-4" />

            <h4 className="font-semibold">
                Total Credit Hour : {totalCredits}
            </h4>

            <hr className="my-4" />

            <h4 className="font-semibold">
                Total Price :{" "}
                {totalPrice === 0 ? totalPrice + "00" : totalPrice} USD
            </h4>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array,
    remainingHours: PropTypes.number,
};

export default Cart;
