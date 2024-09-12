import { Link } from "react-router-dom";
import SubscriptionSVG from "../../assets/images/subscription.svg";
import "./Subscription.scss";

function Subscription() {
    return (
        <div className="subscription">
            <img
                className="subscription__background"
                src={SubscriptionSVG}
                alt="Background"
            />
            <Link to="/bookshelf">
                <button className="subscription__button" type="button">
                    Add Now
                </button>
            </Link>
        </div>
    );
}

export default Subscription;
