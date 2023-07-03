import NavLinks from "../NavLinks/NavLinks";

import classes from "./SideBar.module.css";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <div className={classes.img}>
          <img src="/images/user.jpg" alt="profile_img" />
        </div>
        <div className={classes.text}>
          <h3>Timotheus Bendan</h3>
          <p>Sales Manager</p>
        </div>
      </div>
      <p className={classes.p1}>E-Commerce</p>
      <NavLinks />
    </div>
  );
};

export default SideBar;
