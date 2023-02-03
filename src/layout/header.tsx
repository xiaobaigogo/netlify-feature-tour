import { Col, Menu, Row } from "antd";
import { routes } from "@/routes";
import { Link, RouteObject, useLocation, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

const menus = [
  {
    label: "首页",
    key: "/",
  },
  {
    label: "专业设置",
    key: "/major",
  },
  {
    label: "课程安排",
    key: "/course",
  },
  {
    label: "关于我们",
    key: "/about",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Row style={{ width: "100%", height: "100%" }}>
      <Col
        span={2}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/logo.png"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          alt=""
        />
      </Col>
      <Col span={22}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menus}
          onClick={(item) => navigate(item.key)}
        />
      </Col>
    </Row>
  );
}
