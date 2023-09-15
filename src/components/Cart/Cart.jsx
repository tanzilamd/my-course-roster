import PropTypes from "prop-types";

const Cart = ({ cartItems }) => {
    return (
        <div className="w-1/4 bg-white box-border inline-block h-fit p-4 rounded-lg">
            <h2 className="text-[#2F80ED] font-bold text-lg">
                Credit Hour Remaining 7 hr
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

            <h4 className="font-semibold">Total Credit Hour : 13</h4>

            <hr className="my-4" />

            <h4 className="font-semibold">Total Price : 48000 USD</h4>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array,
};

export default Cart;
