import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommendations from "./Recommendations/Recommendations";
import Sidebar from "./Sidebar/Sidebar";
import products from "./Database/data";
import "./index.css";
import Card from "./Components/Card";

const App = () => {
  const [selectedCategory, setselectedCategory] = useState(null);

  // -----Input Filter-----
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => setQuery(e.target.value);

  const filteredItems = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // -----Radio Filter-----
  const handleChange = (e) => {
    setselectedCategory(e.target.value);
  };

  //-----Button Filter-----
  const handleClick = (e) => {
    setselectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //FILTERING INPUT ITEMS
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommendations handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};
export default App;
