import Buttons from "../Components/Buttons";
import "./Recommends.css";

const Recommendations = () => {
  return (
    <>
      <div>
        <h2 className="recommend-title">Recommended</h2>
        <div className="recommend-flex">
          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
          <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};
export default Recommendations;
