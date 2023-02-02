import { Col, Row, Typography, Image } from "antd";
import MajorTitle from "@/components/TitlePar";

export default function Calligraphy() {
  return (
    <>
      <Row>
        <Col span={24}>
          <MajorTitle title={"书法"} subTitle={"calligraphy"}></MajorTitle>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Typography.Paragraph>
            益智艺术培训中心的书法专业包括硬笔书法和毛笔的教授。掌握正确的握笔方法，书写有灵魂的汉字，掌握多种字体笔法，让孩子们在一笔一画中领略汉字之美，在汉字中汲取民族的力量。
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8}>
          <Image
            src="/majors/书法老师1.png"
            alt=""
            width={"100%"}
            height={"300px"}
            className={"image-style"}
          />
        </Col>
        <Col span={8}>
          <Image
            src="/majors/书法奖状1.png"
            alt=""
            className={"image-style"}
            width={"100%"}
            height={"300px"}
          />
        </Col>
        <Col span={8}>
          <Image
            src="/majors/书法教学1.png"
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
