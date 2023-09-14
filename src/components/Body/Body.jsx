import Courses from "../Courses/Courses";
import Cart from "../Cart/Cart";

const Body = () => {
    return (
        <div>
            <div className="flex gap-2 container mx-auto">
                <Courses></Courses>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Body;
