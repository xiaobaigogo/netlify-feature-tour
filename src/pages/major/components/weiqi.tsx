import { Col, Row, Typography, Image } from "antd";
import MajorTitle from "@/components/TitlePar";


export default function Weiqi() {
  return (
    <>
      <Row>
        <Col span={24}>
          <MajorTitle title={"#围棋"} subTitle={"weiqi"}></MajorTitle>
        </Col>
      </Row>
      <Row gutter={24} align={"middle"} justify={"center"}>
        <Col span={12}>
          <Typography.Paragraph>
            围棋专业是益智艺术培训中心的王牌专业。从2012年冬季开班，围棋专业配备了近十人的教学团队和多达二十位的客座教授（其中方昆耀先生担任揭阳市棋类协会普宁分会会长，揭阳市棋类协会围棋专业委员会副会长），先后培养了数百千位学员，并斩获多项奖项：
          </Typography.Paragraph>
          <Typography.Paragraph>
            2014年，益智艺术培训中心学员李洁、方怡丹获揭阳市第六届运动会暨第三届中小学生运动会围棋项目女子甲组冠、亚军。
          </Typography.Paragraph>
          <Typography.Paragraph>
            2014年，益智艺术培训中心学员钟佳润、李智获揭阳市第六届运动会暨第三届中小学生运动会围棋项目男子甲组季军、第四名。
          </Typography.Paragraph>
          <Typography.Paragraph>
            2014年，益智艺术培训中心获揭阳市第六届运动会暨第三届中小学生运动会围棋项目团体亚军的佳绩，为普宁市冠军。
          </Typography.Paragraph>
          <Typography.Paragraph>
            2015年，普宁市市运会围棋项目中前八名有六名学员出自益智艺术培训中心。
          </Typography.Paragraph>
          <Typography.Paragraph>
            2017年，益智艺术培训中心获揭阳市第七届运动会暨第四届中小学生运动会围棋项目团体亚军的佳绩，所有参赛学员均获得奖金和奖牌。
          </Typography.Paragraph>
        </Col>
        <Col span={12}>
          <Image
            src="/majors/围棋奖状.jpg"
            alt=""
            className={"image-style"}
            width={"100%"}
            height={"400px"}
          />
        </Col>
      </Row>
      <Row gutter={24} align={"middle"} justify={"center"} style={{marginBottom: '30px'}}>
        <Col span={8}>
          <Image
            src="/majors/围棋奖状1.jpg"
            alt=""
            className={"image-style"}
            width={"100%"}
            height={"300px"}
          />
        </Col>
        <Col span={8}>
          <Image
            src="/majors/围棋奖状2.jpg"
            alt=""
            className={"image-style"}
            width={"100%"}
            height={"300px"}
          />
        </Col>
        <Col span={8}>
          <Typography.Paragraph>
            一年两度的棋力测评是围棋专业的重头戏，益智艺术培训中心会根据学员的棋力水平进行分组比赛。
          </Typography.Paragraph>
          <Typography.Paragraph>
            经过激烈角逐，综合学员的赛场成绩和日常表现，围棋专业的教师们会对学员的棋力进行专业评价，并对积极参与棋力测评的学员和表现优异的学员们进行嘉奖，激发学员的对弈热情。
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row gutter={24} align={"middle"} justify={"center"}>
        <Col span={8}>
          <Typography.Paragraph>
            同时，为更好提高学员棋力，除老师下指导棋、与棋友对弈外，围棋专业特为高级班开设电教室，借助电子设备进行深度教学（包括网上对弈、棋谱分析等），效果更佳。
          </Typography.Paragraph>
        </Col>
        <Col span={8}>
          <Image
            src="/majors/围棋电教室1.png"
            alt=""
            className={"image-style"}
            width={"100%"}
            height={"300px"}
          />
        </Col>
        <Col span={8}>
          <Image
            src="/majors/围棋电教室2.png"
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