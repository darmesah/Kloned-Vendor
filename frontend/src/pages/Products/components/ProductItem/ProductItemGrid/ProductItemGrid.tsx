import classes from "./ProductItemGrid.module.css";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

type Props = {
  product: Product;
};

const ProductItemGrid = ({ product }: Props) => {
  return (
    <div className={classes.grid}>
      <div className={classes.img}>
        <img src={product.image} alt={product.title} />
      </div>
      <h5>{product.title}</h5>
      <h4>${product.price.toFixed(2)}</h4>
    </div>
  );
};

export default ProductItemGrid;
