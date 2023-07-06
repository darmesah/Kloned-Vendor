type ProductObject = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const products: ProductObject[] = [
  { id: "p1", title: "Headphone", image: "/images/products/1.jpg", price: 120 },
  {
    id: "p2",
    title: "Wrist watch",
    image: "/images/products/2.jpg",
    price: 70,
  },
  { id: "p3", title: "Headphone", image: "/images/products/3.jpg", price: 120 },
  {
    id: "p4",
    title: "Wrist watch",
    image: "/images/products/4.jpg",
    price: 70,
  },
  { id: "p5", title: "Headphone", image: "/images/products/5.jpg", price: 120 },
  {
    id: "p6",
    title: "Wrist watch",
    image: "/images/products/6.jpg",
    price: 70,
  },
];

export default products;
