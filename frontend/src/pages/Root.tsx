import { Outlet } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import {
  BsThreeDots,
  BsSearch,
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import classes from "./components/Root.module.css";
import Header from "../components/Header/Header";
import SideBar from "../components/Navigation/SideBar/SideBar";
import { useState } from "react";

type Props = {};

const RootLayout = (props: Props) => {
  const [showNav, setShowNav] = useState(false);
  const [showDeskNav, setShowDeskNav] = useState(true);

  const showNavHandler = () => {
    setShowNav(true);
  };
  const showDeskNavHandler = () => {
    setShowDeskNav(true);
  };

  const hideNavHandler = () => {
    setShowNav(false);
  };
  const hideDeskNavHandler = () => {
    setShowDeskNav(false);
  };

  return (
    <div className={classes.container}>
      {/* Mobile Navigation  */}
      <div
        className={`${classes.mobile_nav} ${showNav && classes.show_mobile}`}
      >
        <div className={classes.logo_x}>
          <h2>LOGO</h2>
          <div onClick={hideNavHandler} className={classes.close}>
            <IoClose />
          </div>
        </div>
        <SideBar />
      </div>

      {/* Desktop Navigation */}
      <div
        className={`${classes.desktop_nav} ${
          !showDeskNav && classes.desktop_nav_hide
        }`}
      >
        <div className={classes.desk_logo_hide}>
          <h2>LOGO</h2>
          <div onClick={hideDeskNavHandler} className={classes.desk_hide_side}>
            <BsFillArrowLeftSquareFill />
          </div>
        </div>
        <SideBar />
      </div>

      {/* Main  */}
      <div className={classes.main}>
        <div className={classes.open_head}>
          <span onClick={showNavHandler} className={classes.open_nav}>
            <SlMenu />
          </span>
          <div className={classes.header_cont}>
            <div className={classes.desk_show_side_flex}>
              {!showDeskNav && (
                <div
                  onClick={showDeskNavHandler}
                  className={classes.desk_show_side}
                >
                  <BsFillArrowRightSquareFill />
                </div>
              )}
              <div className={classes.div2}>
                <Header />
              </div>
            </div>
          </div>
          <div className={classes.mobile_search}>
            <BsSearch />
          </div>
          <div className={classes.mobile_options}>
            <BsThreeDots />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
