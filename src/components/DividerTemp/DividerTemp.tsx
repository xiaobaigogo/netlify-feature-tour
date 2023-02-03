import { Col, Divider, Row, Typography } from "antd";
import { ReactNode } from "react";

type DividerTempProps = {
  icon?: ReactNode
  name: string
}

export default function DividerTemp({icon, name}: DividerTempProps) {
  return (
    <Divider>
      <Row align={"middle"} gutter={24}>
        <Col
          span={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </Col>
        <Col span={16}>
          <Typography.Title style={{ margin: 0 }}>{name}</Typography.Title>
        </Col>
        <Col span={4}></Col>
      </Row>
    </Divider>
  );
}