import { Col, Row, Typography, Image } from "antd";
import MajorTitle from "@/components/TitlePar";

export default function Painting() {
  return (
    <>
      <Row>
        <Col span={24}>
          <MajorTitle title={"美术"} subTitle={"painting"}></MajorTitle>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Typography.Paragraph>
            美术专业是益智艺术培训中心的特色专业，学员按照学习进度和年龄分为三个班次：启蒙班、创意班和特长班。启蒙班主要教授儿童画和手工制作，创意班主要教授高级手工、素描、水彩和国画，特长班面向广大中考高考的美术考生，主要教授相应的美术技法。
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col span={7}>
          <Image
            src="/majors/美术教学1.png"
            alt=""
            className={"image-style"}
            width={"100%"}
            height={"300px"}
          />
        </Col>
        <Col span={10}>
          <Image
            src="/majors/美术奖状1.png"
            alt=""
            className={"image-style"}
            width={"100%"}
            height={"300px"}
          />
        </Col>
        <Col span={7}>
          <Image
            src="/majors/美术教学2.png"
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
