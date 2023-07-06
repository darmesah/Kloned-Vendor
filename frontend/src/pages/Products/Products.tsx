import { useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";

import Header from "../../components/Header/Header";
import products from "./components/data";
import ProductItemGrid from "./components/ProductItem/ProductItemGrid/ProductItemGrid";
import ProductItemList from "./components/ProductItem/ProductItemList/ProductItemList";

import classes from "./components/Products.module.css";

type Props = {};

const Products = (props: Props) => {
  const [gridProducts, setGridProducts] = useState(true);

  return (
    <>
      <Header pageTitle="Products" />
      <div className={classes.container}>
        <div className={classes.head}>
          <p>All Products</p>
          <div className={classes.view_cont}>
            <span
              onClick={() => setGridProducts(true)}
              className={`${classes.grid_icon} ${
                gridProducts && classes.active_icon
              }`}
            >
              <BsGrid3X3GapFill />
            </span>
            <span
              onClick={() => setGridProducts(false)}
              className={!gridProducts && classes.active_icon}
            >
              <TbListDetails />
            </span>
          </div>
        </div>
        <div className={classes.product}>
          {gridProducts ? (
            <div className={classes.products_grid}>
              {products.map((product) => (
                <ProductItemGrid product={product} />
              ))}
            </div>
          ) : (
            <div className={classes.products_list}>
              <div className={classes.list_head}>
                <h4>ID</h4>
                <h4>PHOTO</h4>
                <h4>NAME</h4>
                <h4>STOCK</h4>
                <h4>PRICE</h4>
              </div>
              {products.map((product) => (
                <ProductItemList product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
