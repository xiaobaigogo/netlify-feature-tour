import { Carousel, Col, Row } from "antd";

const contentStyle: React.CSSProperties = {
  height: "700px",
  color: "#fff",
  width: "100%",
  textAlign: "center",
  background: "#364d79",
};

export default function HomeCarousel() {
  return (
    <Row justify={"center"}>
      <Col span={20}>
        <Carousel autoplay>
          <div>
            <img style={contentStyle} src="/carousel/荣誉0.png" alt="" />
          </div>
          <div>
            <img style={contentStyle} src="/carousel/荣誉1.png" alt="" />
          </div>
          <div>
            <img style={contentStyle} src="/carousel/公司.png" alt="" />
          </div>
        </Carousel>
      </Col>
    </Row>
  );
}
