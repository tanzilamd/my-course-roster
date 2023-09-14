import Courses from "../Courses/Courses";
import Cart from "../Cart/Cart";

const Body = () => {
    return (
        <div>
            <div className="flex gap-2 container mx-auto mb-10">
                <Courses></Courses>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Body;
