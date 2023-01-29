import { Col, Row, Image, Typography, Statistic, Divider, Card } from "antd";
import HomeCarousel from "./components/HomeCarousel";
import HomeText from "./components/HomeText";

const philosophy = {
  title: "我们的理念",
  subTitle: "Our Philosophy",
  paragraph: `专注艺术培训，拥有热衷于少儿儿童教育事业的管理团队和具有丰富教学经验的高素质、高水准师资力量。
        始终坚持“以棋启智，以棋育人”的教育、教学理念，促进我国艺术培训事业蓬勃发展。`,
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
    img: "/majors/围棋.webp",
    id: "weiqi",
  },
  {
    title: "象棋",
    img: "/majors/围棋.webp",
    id: "chess",
  },
  {
    title: "美术",
    img: "/majors/围棋.webp",
    id: "painting",
  },
  {
    title: "书法",
    img: "/majors/围棋.webp",
    id: "calligraphy",
  },
  {
    title: "钢琴",
    img: "/majors/围棋.webp",
    id: "piano",
  },
  {
    title: "葫芦丝",
    img: "/majors/围棋.webp",
    id: "cucurbit flute",
  },
  {
    title: "椰胡",
    img: "/majors/围棋.webp",
    id: "yehu",
  },
  {
    title: "小步智学",
    img: "/majors/围棋.webp",
    id: "xiaobuzhixue",
  },
];

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <div>
        <Row justify="center" align="middle" gutter={24}>
          <Col span={10} style={{ height: "280px" }}>
            <Row
              gutter={24}
              justify="center"
              align={"middle"}
              style={{
                height: "inherit",
                backgroundImage: "url(/company.png)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
              }}
            >
              {statis.map((item) => (
                <Col
                  span={6}
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    padding: "10px 20px",
                  }}
                >
                  <Statistic value={item.value} title={item.title}></Statistic>
                </Col>
              ))}
            </Row>
          </Col>
          <Col span={10}>
            <HomeText
              title={introduction.title}
              subTitle={introduction.subTitle}
              paragraph={introduction.paragraph}
            />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={10}>
            <HomeText
              title={philosophy.title}
              subTitle={philosophy.subTitle}
              paragraph={philosophy.paragraph}
            />
          </Col>
          <Col span={10}>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={10}>
            <Row justify="center">
              <img src="/goal.jpg" alt="" width={350} />
            </Row>
          </Col>
          <Col span={10}>
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
              <Col span={6}>
                <a href={`/majors/#${item.id}`}>
                  <Card cover={<img alt="" src={item.img} />}>
                    <Card.Meta title={item.title} />
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
