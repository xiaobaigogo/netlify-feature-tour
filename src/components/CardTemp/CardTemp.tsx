import { Card, Col, Row, Typography } from "antd";
import { ReactNode } from "react";
import style from "./CardTemp.module.scss";

type CardTempProps = {
  icon: ReactNode;
  label: string;
  img: string;
  title: string;
  description: string;
};

export default function CardTemp({
  icon,
  label,
  img,
  title,
  description,
}: CardTempProps) {
  return (
    <Card className={style.root} hoverable>
      <Row className="icon-text" gutter={6}>
        <Col>
          {icon}
        </Col>
        <Col>
          <Typography.Text>{label}</Typography.Text>
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"} className={"img-row"}>
        <img className="img" src={img} alt="" />
      </Row>
      <div className="title">
        <Row>
          <Typography.Title level={3}>{title}</Typography.Title>
        </Row>
        <Row>
          <Typography.Text type="secondary">{description}</Typography.Text>
        </Row>
      </div>

      {/* <Card.Meta className="title" title={title} description={description}></Card.Meta> */}
    </Card>
  );
}
