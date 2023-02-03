import {
  Checkerboard,
  Chess,
  Piano,
  Platte,
  WritingFluently,
} from "@icon-park/react";
import { Card, Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import style from "./index.module.less";

export default function Catalogue() {
  const location = useLocation();

  const hash = location.hash;

  return (
    <Card className={style.catalogue}>
      <a href={"#weiqi"}>
        <Row
          className={style.select}
          justify={"center"}
          align={"middle"}
          gutter={24}
        >
          <Col>
            <Checkerboard theme="outline" size="24" fill="#333" />
          </Col>
          <Col>围棋</Col>
        </Row>
      </a>
      <a href={"#chess"}>
        <Row justify={"center"} align={"middle"} gutter={24}>
          <Col>
            <Chess theme="outline" size="24" fill="#333" />
          </Col>
          <Col>象棋</Col>
        </Row>
      </a>
      <a href={"#calligraphy"}>
        <Row justify={"center"} align={"middle"} gutter={24}>
          <Col>
            <WritingFluently theme="outline" size="24" fill="#333" />
          </Col>
          <Col>书法</Col>
        </Row>
      </a>
      <a href={"#painting"}>
        <Row justify={"center"} align={"middle"} gutter={24}>
          <Col>
            <Platte theme="outline" size="24" fill="#333" />
          </Col>
          <Col>美术</Col>
        </Row>
      </a>
      <a href={"#piano"}>
        <Row justify={"center"} align={"middle"} gutter={24}>
          <Col>
            <Piano theme="outline" size="24" fill="#333" />
          </Col>
          <Col>钢琴</Col>
        </Row>
      </a>
    </Card>
  );
}
