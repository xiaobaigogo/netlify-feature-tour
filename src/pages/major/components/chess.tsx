import { Col, Row, Typography, Image } from "antd";
import MajorTitle from "@/components/TitlePar";

export default function Chess() {
  return (
    <>
      <Row>
        <Col span={24}>
          <MajorTitle title={"#象棋"} subTitle={"chess"}></MajorTitle>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={10}>
          <Typography.Paragraph>
            象棋专业是益智艺术培训中心的特色专业。按照学员棋力分为入门班和初级班。主要教授象棋开局、中局和残局的对弈处理，在提升学员棋力的同时，受到传统文化的熏陶。 
          </Typography.Paragraph>
          <Typography.Paragraph>
            与围棋专业相似，象棋专业的初级班也开设有电教室教学
          </Typography.Paragraph>
        </Col>
        <Col span={7}>
          <Image
            src="/majors/象棋教学1.jpg"
            alt=""
            className={"image-style"}
            width={"100%"}
            height={"300px"}
          />
        </Col>
        <Col span={7}>
          <Image
            src="/majors/象棋奖状1.jpg"
            alt=""
            className={"image-style"}
            width={"100%"}
            height={"300px"}
          />
        </Col>
      </Row>
    </>
  );
}
