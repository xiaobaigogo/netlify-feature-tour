import { Carousel, Col, Row } from "antd";

const contentStyle: React.CSSProperties = {
  height: "700px",
  color: "#fff",
  width: "100%",
  borderRadius: "50px",
  overflow: "hidden",
  // boxShadow: "0px 0px 30px 11px",
  textAlign: "center",
};

const imgs = [
  "/carousel/公司.png",
  "/carousel/日常1.jpg",
  "/carousel/学员1.jpg",
  "/carousel/荣誉0.png",
  "/carousel/荣誉1.png",
];

export default function HomeCarousel() {
  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        height: "900px",
      }}
    >
      <Col span={20}>
        <Carousel autoplay style={contentStyle}>
          {/* <Carousel> */}
          {imgs.map((item, index) => (
            <div key={item} id={String(index)}>
                <img
                  src={item}
                  alt=""
                  style={{ height: "700px", width: "100%" }}
                />
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
}
