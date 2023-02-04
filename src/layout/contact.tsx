import { Col, Row, Typography } from "antd";

export default function Contact() {
  
  return (
    <Row
      style={{
        width: '100%',
        padding: "50px 0",
        background: "linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172))",
      }}
    >
      <Col
        span={10}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Row align={"middle"}>
          <Col>
            <img src="/logo.png" alt="" height={50} width={55} />
          </Col>
          <Col>
            <Typography.Text strong>益智艺术培训中心</Typography.Text>
          </Col>
        </Row>
        <img src="/footer/公众号.png" alt="" height={100} width={100} />
      </Col>
      <Col span={5}>
        <Typography.Title level={5}>联系方式</Typography.Title>
        <Typography.Paragraph strong>方老师：xxxxxxx</Typography.Paragraph>
        <Typography.Paragraph strong>张老师：xxxxxxx</Typography.Paragraph>
      </Col>
      <Col span={7}>
        <div>
          <Typography.Title level={5}>总部地址</Typography.Title>
          <Typography.Paragraph strong>xx省xx市xx街道xx号</Typography.Paragraph>
        </div>
      </Col>
    </Row>
  );
}