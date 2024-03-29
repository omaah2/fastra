import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { LiaBookSolid } from "react-icons/lia";
import { TiContacts } from "react-icons/ti";
import { MdOutlineInventory2, MdPeopleAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";

import "./App.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const images = [
    require("./assets/images/logo.png"),
    require("./assets/images/image.png"),
    require("./assets/images/image1.png"),
    require("./assets/images/image2.png"),
    require("./assets/images/image3.png"),
    require("./assets/images/image4.png"),
    require("./assets/images/image5.png"),
    require("./assets/images/image6.png"),
    require("./assets/images/image7.png"),
    require("./assets/images/image8.png"),
    require("./assets/images/image9.png"),
    require("./assets/images/image10.png"),
    require("./assets/images/revenue.png"),
    require("./assets/images/sales.png"),
    require("./assets/images/employees.png"),
    require("./assets/images/clients.png"),
  ];

  const activities = [
    {
      text: "Aslam Dhikrullahi created a new invoice INV001.",
      gradient: "linear-gradient(to right, #2BA24C,#103C1C)",
    },
    {
      text: "Aslam Dhikrullahi applied for leave",
      gradient: "linear-gradient(to right,#593BED, #332287)",
    },
    {
      text: "24 Desktop Computers were shipped to Client (Aslam Dhikrullahi).",
      gradient: "linear-gradient(to right, #F0B501, #8A6801)",
    },
    {
      text: "Aslam Dhikrullahi added 32 Laptops to the inventory.",
      gradient: "linear-gradient(to right,#E43E2B, #E43E2B)",
    },
    {
      text: "You assigned admin privileges to Aslam Dhikrullahi.",
      gradient: "linear-gradient(to right, #3B7DED, #224787)",
    },
    {
      text: "Aslam Dhikrullahi created a new invoice INV001.",
      gradient: "linear-gradient(to right,#2BA24C, #103C1C)",
    },
  ];

  return (
    <>
      <div className="main-container">
        <aside className={`side-bar ${showSidebar ? "show" : ""}`}>
          <div className="logo">
            <img src={images[0]} alt="logo" />
            <BsArrowLeft />
          </div>
          <div className="menu">
            <div className="menu-bar">
              <span>
                <RiDashboardFill />
              </span>
              <span>Dashboard</span>
            </div>
            <div className="menu-bar">
              <span>
                <LiaBookSolid />
              </span>
              <span>Books</span>
            </div>
            <div className="menu-bar">
              <span>
                <MdOutlineInventory2 />
              </span>
              <span>Sell</span>
            </div>
            <div className="menu-bar">
              <span>
                <MdOutlineInventory2 />
              </span>
              <span>Source</span>
            </div>
            <div className="menu-bar">
              <span>
                <MdOutlineInventory2 />
              </span>
              <span>Stock</span>
            </div>
            <div className="menu-bar">
              <span>
                <MdPeopleAlt />
              </span>
              <span>Talents</span>
            </div>
            <div className="menu-bar">
              <span>
                <TiContacts />
              </span>
              <span>Contact</span>
            </div>
            <div className="setting-container">
              <div className="menu-bar setting">
                <span>
                  <IoSettingsOutline />
                </span>
                <span>Settings</span>
              </div>
            </div>
          </div>
        </aside>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          {showSidebar ? <TiTimes /> : <FaBars />}
        </div>
        <div className="main-bar">
          <div className="main-bar_top">
            <h1>Overview</h1>
            <div className="h-admin">
              <img src={images[1]} alt="admin" />
              <h4>Administrator</h4>
            </div>
          </div>
          <div className="test">
            <div className="main-bar_content">
              <div className="cards">
                {images.slice(12, 16).map((img, index) => (
                  <img src={img} alt={`card${index + 1}`} key={index} />
                ))}
              </div>
              <div className="activity">
                <h1>Latest Activities</h1>
                <div>
                  {activities.map((activity, index) => (
                    <div className={`card card${index + 1}`} key={index}>
                      <div
                        className="circle"
                        style={{ background: activity.gradient }}
                      ></div>
                      <p>{activity.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="main-bar_side">
              <div>
                <h2>Employees</h2>
                <div>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div className="admin" key={index}>
                      <img src={images[index + 2]} alt="" />
                      <div>
                        <h4>Aslam Dhikrullahi</h4>
                        <p>Admin</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="contact">
                <h2>Contacts</h2>
                <div>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div className="admin" key={index}>
                      <img src={images[index + 4]} alt="" />
                      <div>
                        <h4>Aslam Dhikrullahi</h4>
                        <p>Client</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
