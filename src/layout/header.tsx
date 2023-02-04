import { Col, Dropdown, Menu, Row } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Wechat } from "@icon-park/react";

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

const logo: MenuProps["items"] = [
  {
    label: <img src="/footer/公众号.png" alt="" width={200} height={200} />,
    key: "0",
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
      <Col span={20}>
        <Menu
          mode="horizontal"
          style={{
            background: 'transparent'
          }}
          selectedKeys={[location.pathname]}
          items={menus}
          onClick={(item) => navigate(item.key)}
        />
      </Col>
      <Col span={2}>
        <Dropdown
          menu={{ items: logo }}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
        >
          <Wechat theme="outline" size="24" fill="#333" />
        </Dropdown>
      </Col>
    </Row>
  );
}
