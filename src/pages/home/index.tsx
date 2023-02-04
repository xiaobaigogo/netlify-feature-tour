import { Col, Row, Typography, Statistic, Divider, Card } from "antd";
import { Link } from "react-router-dom";
import { BookOne, Checkerboard, Chess, Music, MusicOne, Piano, Platte, WritingFluently } from "@icon-park/react";
import HomeCarousel from "./components/HomeCarousel";
import HomeText from "@/components/TitlePar";
import CardTemp from "@/components/CardTemp/CardTemp";

const philosophy = {
  title: "我们的理念",
  subTitle: "Our Philosophy",
  paragraph: [
    "坚持“以棋启智，以棋育人”的教育、教学理念",
    "教导学生遵循“自信、友爱、谦恭、共进”的社训学习、做事和做人",
  ],
  picture:
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
};

const introduction = {
  title: "益智艺术中心",
  subTitle: "Yizhi Arts Center",
  paragraph: [
    `益智艺术培训中心是一家集围棋、象棋、美术、小步智学，素描 ，书法和钢琴培训教学、考级的综合培训机构，合作机构10多家。现有在职教师几十名（含客座教授），师资力量雄厚，教育、教学经验丰富。`,
    `益智艺术培训中心原为益智棋社，成立于2012年2月，成立至今已经有近10年，成立之前已经开展围棋教学多年，从开展围棋教学至现在已经有近二十年的围棋教育、教学经验！益智艺术培训中心始终坚持“以棋启智，以棋育人”的教育、教学理念；教导学生遵循“自信、友爱、谦恭、共进”的社训学习、做事和做人！办学10多年来，取得了较为优异的教育、教学效果！受到家长和社会各届人士的好评。`,
  ],
};

const goal = {
  title: "我们的目标",
  subTitle: "Our Future Vision",
  paragraph: [
    `1、短期目标：通过1~2年的学习，培养有一定棋力的棋士及掌握相关传统的文化的学员（已经实现）`,
    `2、中期目标：通过3~5年的学习，养成良好的思考习惯和学习习惯，培养重点私校、重点中学的学霸，并考上双一流重点大学！（已经实现）`,
    `3、长期目标：通过5年以上时间的学习，养成良好的思维习惯和做事习惯，培养老板、领导和领袖（待时间验证）`,
  ],
};

const statis = [
  {
    title: "开设专业",
    value: "4+",
  },
  {
    title: "培训学员",
    value: "1000+",
  },
  {
    title: "教学经验",
    value: "12年+",
  },
  {
    title: "师资力量",
    value: "20+",
  },
];

const majors = [
  {
    title: "围棋",
    img: "/home/围棋封面.jpg",
    id: "weiqi",
    icon: <Checkerboard theme="outline" size="24" fill="#333" />,
    description: "战罢两奁分白黑，一秤何处有亏成",
  },
  {
    title: "象棋",
    img: "/home/象棋封面.jpg",
    icon: <Chess theme="outline" size="24" fill="#333" />,
    id: "chess",
    description: "两边对坐无言语，尽日时间下子声",
  },
  {
    title: "美术",
    img: "/home/美术封面.jpg",
    icon: <Platte theme="outline" size="24" fill="#333" />,
    id: "painting",
    description: "壮哉昆仑方壶图，挂君高堂之素壁",
  },
  {
    title: "书法",
    img: "/home/书法封面.jpg",
    id: "calligraphy",
    icon: <WritingFluently theme="outline" size="24" fill="#333" />,
    description: "铁画银钩藏雅韵，粗微浓淡漫馨香",
  },
  {
    title: "钢琴",
    img: "/home/钢琴封面.png",
    icon: <Piano theme="outline" size="24" fill="#333" />,
    id: "piano",
    description: "嘈嘈切切错杂弹，大珠小珠落玉盘",
  },
  {
    title: "葫芦丝",
    img: "/home/小步智学封面.png",
    id: "cucurbit flute",
    icon: <Music theme="outline" size="24" fill="#333" />,
    description: "一曲丝竹动客宾，响喝楼台十里堤",
  },
  {
    title: "椰胡",
    img: "/home/小步智学封面.png",
    icon: <MusicOne theme="outline" size="24" fill="#333" />,
    id: "yehu",
    description: "玉纤挑落折冰声，散入秋空韵转清",
  },
  {
    title: "小步智学",
    img: "/home/小步智学封面.png",
    id: "xiaobuzhixue",
    icon: <BookOne theme="outline" size="24" fill="#333" />,
    description: "寒夜读书忘却眠，锦衾香烬炉无烟",
  },
];

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <Card style={{ width: "80%", margin: "0 auto" }}>
        <div>
          <Row justify="center" align="middle" gutter={24}>
            <Col span={12} style={{ height: "280px" }}>
              <Row
                gutter={24}
                justify="center"
                align={"middle"}
                style={{
                  height: "inherit",
                  backgroundImage: "url(/company.png)",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {statis.map((item) => (
                  <Col
                    key={item.title}
                    span={6}
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      padding: "10px 20px",
                    }}
                  >
                    <Statistic
                      value={item.value}
                      title={item.title}
                    ></Statistic>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col span={12}>
              <HomeText
                title={introduction.title}
                subTitle={introduction.subTitle}
                paragraph={introduction.paragraph}
              />
            </Col>
          </Row>
          <Row justify="center" align="middle">
            <Col span={12}>
              <HomeText
                title={philosophy.title}
                subTitle={philosophy.subTitle}
                paragraph={philosophy.paragraph}
              />
            </Col>
            <Col span={12}>
              <Row justify="center">
                <img src="/home/Philosophy.png" alt="" width={350} />
              </Row>
            </Col>
          </Row>
          <Row justify="center" align="middle">
            <Col span={12}>
              <Row justify="center">
                <img src="/home/goal.png" alt="" width={350} />
              </Row>
            </Col>
            <Col span={12}>
              <HomeText
                title={goal.title}
                subTitle={goal.subTitle}
                paragraph={goal.paragraph}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Divider>
            <Typography.Title>课程介绍</Typography.Title>
          </Divider>
          <div style={{ padding: "0 100px" }}>
            <Row justify="center" gutter={[24, 24]}>
              {majors.map((item) => (
                <Col span={6} key={item.id}>
                  <Link to={`/major#${item.id}`}>
                    <CardTemp
                      title={item.title}
                      img={item.img}
                      description={item.description}
                      icon={item.icon}
                      label={item.id}
                    ></CardTemp>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Card>
    </>
  );
}
