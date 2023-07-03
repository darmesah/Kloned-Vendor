import { NavLink } from "react-router-dom";
import {
  BsBarChart,
  BsArrowRight,
  BsReceipt,
  BsTruck,
  BsPersonBadge,
  BsWallet2,
} from "react-icons/bs";

import classes from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span className={classes.nav_img}>
              <BsBarChart />
            </span>
            <span className={classes.nav_text}>Dashboard</span>
            <span className={classes.arrow}>
              <BsArrowRight />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span className={classes.nav_img}>
              <BsReceipt />
            </span>
            <span className={classes.nav_text}>Orders</span>
            <span className={classes.arrow}>
              <BsArrowRight />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span className={classes.nav_img}>
              <BsTruck />
            </span>
            <span className={classes.nav_text}>Products</span>
            <span className={classes.arrow}>
              <BsArrowRight />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/buyer"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span className={classes.nav_img}>
              <BsWallet2 />
            </span>
            <span className={classes.nav_text}>Buyer</span>
            <span className={classes.arrow}>
              <BsArrowRight />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customer"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span className={classes.nav_img}>
              <BsPersonBadge />
            </span>
            <span className={classes.nav_text}>Customers</span>
            <span className={classes.arrow}>
              <BsArrowRight />
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
