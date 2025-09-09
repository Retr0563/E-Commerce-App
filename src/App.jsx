import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommendations from "./Recommendations/Recommendations";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommendations />
      <Products />
    </>
  );
};
export default App;
