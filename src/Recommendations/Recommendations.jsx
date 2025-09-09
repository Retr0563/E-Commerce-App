import "./Recommends.css";

const Recommendations = () => {
  return (
    <>
      <div>
        <h2 className="recommend-title">Recommended</h2>
        <div className="recommend-flex">
          <button className="btns">All Products</button>
          <button className="btns">Nike</button>
          <button className="btns">Adidas</button>
          <button className="btns">Puma</button>
          <button className="btns">Vans</button>
        </div>
      </div>
    </>
  );
};
export default Recommendations;
