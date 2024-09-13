import { Link } from "react-router-dom";
import SubscriptionSVG from "../../assets/images/subscription.svg";
import "./Subscription.scss";
import banner from "../../assets/images/banner.png";

function Subscription() {
  return (
    <div className="subscription">
      <img
        className="subscription__background"
        src={SubscriptionSVG}
        alt="Background"
      />
      <Link to="/checkout">
        <img className="subscription__banner" src={banner} alt="Banner" />
      </Link>
      <Link to="/checkout">
        <button className="subscription__button" type="button">
          Add Now
        </button>
      </Link>
    </div>
  );
}

export default Subscription;
