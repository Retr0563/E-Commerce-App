import { AiFillStar } from "react-icons/ai";
import "./Products.css";
import { BsFillBagHeartFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";

const Products = () => {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg"
            alt="Shoe"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-start" />
              <AiFillStar className="ratings-start" />
              <AiFillStar className="ratings-start" />
              <FaRegStar className="ratings-start" />
              <FaRegStar className="ratings-start" />

              <span className="total-reviews">3</span>
            </section>
            <section className="card-price">
              <div className="price">
                $<del>350</del>200
              </div>
              <div className="bag">
                <BsFillBagHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};
export default Products;
