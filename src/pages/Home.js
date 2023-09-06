import { Fragment } from "react";
import Navbar from "../features/Navbar/navbar";
import ProductList from "../features/product-list/product-list";

const Home = () => {
  return (
    <Fragment>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </Fragment>
  );
};

export default Home;
