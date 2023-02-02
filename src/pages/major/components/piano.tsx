import { Col, Row, Typography, Image } from "antd";
import MajorTitle from "@/components/TitlePar";

export default function Piano() {
  return (
    <>
      <Row>
        <Col span={24}>
          <MajorTitle title={"#钢琴"} subTitle={"piano"}></MajorTitle>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8}>
          <Typography.Paragraph>
            马克思说：“音乐是人类的第二语言。”作为世界上大部分音乐的载体，钢琴以其温润的音色独得大众喜爱。钢琴专业是益智艺术培训中心的特色专业。
          </Typography.Paragraph>
          <Typography.Paragraph>
            钢琴教学采取一对一教学法，根据学员学习进度量身定制教学计划，从《小步舞曲》到《波兰舞曲》，从入门到熟练，我们愿让音乐成为孩子们最好的陪伴。
          </Typography.Paragraph>
        </Col>
        <Col span={8}>
          <Image
            src="/majors/钢琴教学1.png"
            alt=""
            width={"100%"}
            height={"300px"}
            className={"image-style"}
          />
        </Col>
        <Col span={8}>
          <Image
            src="/majors/钢琴奖状1.png"
            alt=""
            width={"100%"}
            height={"300px"}
            className={"image-style"}
          />
        </Col>
      </Row>
    </>
  );
}
