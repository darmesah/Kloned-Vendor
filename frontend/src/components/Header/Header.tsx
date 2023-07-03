import { BsSearch, BsBell, BsPlusCircle } from "react-icons/bs";

import classes from "./Header.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={classes.flex_cont}>
      <div className={classes.container}>
        <p className={classes.text}>Overview</p>
        <form className={classes.search_cont}>
          <button>
            <BsSearch />
          </button>
          <input type="text" placeholder="Search..." />
        </form>
        <div className={classes.notification}>
          <BsBell />
          <span className={classes.notification_number}>2</span>
        </div>
      </div>
      <div className={classes.btn_cont}>
        <button className={classes.add_btn}>
          <span className={classes.plus}>
            <BsPlusCircle />
          </span>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Header;
