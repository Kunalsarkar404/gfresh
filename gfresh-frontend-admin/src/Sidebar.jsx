import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import img from "./assets/Ecomus.svg";
import img1 from "./assets/dashboard.png";
import img4 from "./assets/team.png";
import img5 from "./assets/options.png";
import img8 from "./assets/brand.png";
import img9 from "./assets/logout 2.png";
import img11 from "./assets/ads.png";
import img12 from "./assets/products.png";
import img13 from "./assets/personal-information.png";
import img40 from "./assets/trolley.png";
import img43 from "./assets/completed-task.png";
import { gettoken, removeToken, sohstore } from "./Localstorage/Store";
import Header from "./components/Header";

const Sidebarmenu = ({ children }) => {
  const gettokinval = gettoken();
  const nvg = useNavigate();
  const logoutevt = async () => {
    removeToken();
    nvg("/");
  };
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [hideimg, setHideimg] = useState(false);

  const handleSubMenuClick = (key) => {
    setOpenSubMenu(key === openSubMenu ? null : key);
  };

  useEffect(() => {
    sohstore(false);
  }, []);

  const location = useLocation();
  const result = location.pathname.substring(0, location.pathname.lastIndexOf("/"));
  const desiredString = location.pathname.split("/").slice(0, 2).join("/");

  if (location.pathname === "/") {
    return (
      <div style={{ background: location.pathname === "/resetpassword" ? "#ffff" : "#F3F6FA" }}>
        {children}
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar className="sidebarcum" defaultCollapsed="close">
          <div>
            <Menu className="nothover abc">
              <MenuItem
                className="nothover abc"
                style={{ borderBottom: "1px solid #D9D9D9" }}
                icon={
                  <GiHamburgerMenu
                    fontSize={23}
                    onClick={() => {
                      collapseSidebar();
                      hideorshow();
                    }}
                    color="#0C5398"
                  />
                }
              >
                {hideimg === true ? (
                  <img src={img} alt="logo" style={{ width: "80%" }} />
                ) : (
                  ""
                )}
              </MenuItem>
            </Menu>

            <Menu>
              <MenuItem
                className="nothover"
                icon={<img style={{ width: "36px" }} src={img1} alt="dashboard" />}
              >
                <NavLink
                  to="/dashboard"
                  className={location.pathname === "/dashboard" ? "nav active" : "nav"}
                >
                  Dashboard
                </NavLink>
              </MenuItem>

              <MenuItem
                className="nothover"
                icon={<img style={{ width: "36px" }} src={img4} alt="user" />}
              >
                <NavLink
                  to="/userlist/0"
                  className={location.pathname === "/adduser" || result === "/userlist" || result === "/edituser" ? "nav active" : "nav"}
                >
                  User
                </NavLink>
              </MenuItem>

              <MenuItem
                className="nothover"
                icon={<img style={{ width: "36px" }} src={img40} alt="cart" />}
              >
                <NavLink
                  to="/cartlist/0"
                  className={location.pathname === "/" || result === "/cartlist" ? "nav active" : "nav"}
                >
                  Cart
                </NavLink>
              </MenuItem>

              <MenuItem
                className="nothover"
                icon={<img style={{ width: "36px" }} src={img5} alt="category" />}
              >
                <NavLink
                  to="/categorylist/0"
                  className={location.pathname === "/addcategory" || result === "/categorylist" || result === "/editcategory" ? "nav active" : "nav"}
                >
                  Category
                </NavLink>
              </MenuItem>

              <MenuItem
                className="nothover"
                icon={<img style={{ width: "36px" }} src={img43} alt="order" />}
              >
                <NavLink
                  to="/orderlist/0"
                  className={location.pathname === "/addorder" || result === "/orderlist" || result === "/editorder" ? "nav active" : "nav"}
                >
                  Order
                </NavLink>
              </MenuItem>

              <MenuItem
                className="nothover"
                icon={<img style={{ width: "36px" }} src={img12} alt="product" />}
              >
                <NavLink
                  to="/productlist/0"
                  className={location.pathname === "/addproduct" || result === "/productlist" || result === "/editproduct" ? "nav active" : "nav"}
                >
                  Product
                </NavLink>
              </MenuItem>

              <MenuItem
                className="nothover"
                icon={<img style={{ width: "36px" }} src={img11} alt="banner" />}
              >
                <NavLink
                  to="/bannerlist/0"
                  className={location.pathname === "/addbanner" || result === "/bannerlist" || result === "/editbanner" ? "nav active" : "nav"}
                >
                  Banner
                </NavLink>
              </MenuItem>

              <MenuItem
                className="nothover"
                icon={<img style={{ width: "36px" }} src={img8} alt="brand" />}
              >
                <NavLink
                  to="/brandlist/0"
                  className={location.pathname === "/addbrand" || result === "/brandlist" || result === "/editbrand" ? "nav active" : "nav"}
                >
                  Brand
                </NavLink>
              </MenuItem>

              <SubMenu
                title="Webinfo"
                key="submenu1"
                open={openSubMenu === "submenu1"}
                onClick={() => handleSubMenuClick("submenu1")}
                icon={<img style={{ width: "36px" }} src={img13} alt="webinfo" />}
              >
                <MenuItem>
                  <NavLink
                    to="/webinfo"
                    className={location.pathname === "/webinfo" ? "nav active" : "nav"}
                    style={{ paddingLeft: hideimg === true ? "72px" : "30px" }}
                  >
                    Web Detail
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink
                    to="/contactlist/0"
                    className={location.pathname === "/contactlist" || result === "/contactlist" ? "nav active" : "nav"}
                    style={{ paddingLeft: hideimg === true ? "72px" : "30px" }}
                  >
                    Contact Us
                  </NavLink>
                </MenuItem>
              </SubMenu>

              <MenuItem
                className="nothover"
                onClick={logoutevt}
                icon={<img style={{ width: "36px" }} src={img9} alt="logout" />}
              >
                Log Out
              </MenuItem>
            </Menu>
          </div>
        </Sidebar>
        <div style={{ width: "100%" }}>
          <Header />
          {children}
        </div>
      </div>
    );
  }
};

export default Sidebarmenu;