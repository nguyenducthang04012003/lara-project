import { Layout, Menu, Drawer, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import logo1 from "../assets/logo-removebg-preview.png";

const { Header } = Layout;

export default function Topbar() {
  const location = useLocation();

  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const items = [
    { key: "/", label: <Link to="/">Trang chủ</Link> },
    { key: "/introduce", label: <Link to="/introduce">Giới thiệu</Link> },
    { key: "/products", label: <Link to="/products">Sản phẩm</Link> },
    { key: "/news", label: <Link to="/news">Tin tức</Link> },
    { key: "/contact", label: <Link to="/contact">Liên hệ</Link> },
    { key: "/visualizer", label: <Link to="/visualizer">3D Visualizer</Link> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);

      if (currentScroll > lastScroll) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        height: 70,
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        background: scrolled ? "#fff" : "transparent",
        transition: "all 0.35s ease",
      }}
    >
      {/* LOGO */}
      <Link to="/">
        <img
          src={logo1}
          alt="logo"
          style={{
            width: 300,
            height: "auto",
            objectFit: "contain",
            paddingTop: "14%",
            marginLeft: "25%",
          }}
        />
      </Link>

      {/* DESKTOP MENU */}
      <Menu
        className="desktop-menu"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        style={{
          marginLeft: "auto",
          fontSize: 18,
          borderBottom: "none",
          background: "transparent",
        }}
      />

      {/* MOBILE BUTTON */}
      <Button
        className="mobile-menu-btn"
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setOpen(true)}
        style={{
          marginLeft: "auto",
          fontSize: 26,
        }}
      />

      {/* MOBILE DRAWER */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={items}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </Header>
  );
}
