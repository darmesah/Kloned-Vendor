import { BsSearch, BsBell, BsPlusCircle, BsGlobe2 } from "react-icons/bs";
import { LiaAngleRightSolid } from "react-icons/lia";

import classes from "./Header.module.css";
import { Link } from "react-router-dom";

type Props = {
  pageTitle: string;
};

const Header = ({ pageTitle }: Props) => {
  return (
    <>
      <div className={classes.flex_cont}>
        <div className={classes.container}>
          <p className={classes.text}>{pageTitle}</p>
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
      {pageTitle !== "Dashboard" && (
        <div className={classes.link_back}>
          <Link to="/">
            <span className={classes.globe}>
              <BsGlobe2 />
            </span>
            Dashboard
          </Link>
          <span className={classes.angle}>
            <LiaAngleRightSolid />
          </span>
          {pageTitle}
        </div>
      )}
    </>
  );
};

export default Header;
