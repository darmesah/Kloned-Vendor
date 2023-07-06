import classes from "./ProductItemList.module.css";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

type Props = {
  product: Product;
};

const ProductItemList = ({ product }: Props) => {
  return (
    <>
      <div className={classes.list}>
        <p className={classes.id}>{product.id}</p>
        <div className={classes.img}>
          <img src={product.image} alt={product.title} />
        </div>
        <p className={classes.title}>{product.title}</p>
        <p className={classes.stock}>In Stock</p>
        <p className={classes.price}>${product.price.toFixed(2)}</p>
      </div>
    </>
  );
};

export default ProductItemList;
