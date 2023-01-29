import { Card, Timeline, Typography } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

export default function BigThing() {
  return (
    <Card>
      <Typography.Title style={{ margin: "5px 0" }}>
        {"益智艺术培训中心大事记"}
      </Typography.Title>
      <Typography.Title level={4} type="secondary" style={{ marginTop: "5px" }}>
        {"Big Thing"}
      </Typography.Title>
      <Timeline mode={"left"} style={{ transform: "translate(-740px, 10px)" }}>
        <Timeline.Item
          dot={<ClockCircleOutlined />}
          label={
            <Typography.Title level={5} style={{ margin: "0" }}>
              2012年
            </Typography.Title>
          }
        ></Timeline.Item>
        <Timeline.Item label={"2012年2月"}>益智棋社成立</Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined />}
          label={
            <Typography.Title level={5} style={{ margin: "0" }}>
              2013年
            </Typography.Title>
          }
        ></Timeline.Item>
        <Timeline.Item label={"2013年5月"}>
          益智棋社首届学员参加揭阳市教育局主办的青少年围棋锦标赛，获得1金2银2铜的优异成绩，所有参赛学员都获得奖金和奖状！
        </Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined />}
          label={
            <Typography.Title level={5} style={{ margin: "0" }}>
              2014年
            </Typography.Title>
          }
        ></Timeline.Item>
        <Timeline.Item label={"2014年7月"}>
          益智棋社首届部分优秀学员代表普宁市参加揭阳市运动会围棋项目比赛，获一金二银二铜，第四名一人，第五名一人和第七名一人，所有参赛运动员均进入八强，都获得奖状和奖金。
        </Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined />}
          label={
            <Typography.Title level={5} style={{ margin: "0" }}>
              2015年
            </Typography.Title>
          }
        ></Timeline.Item>
        <Timeline.Item label={"2015年7月"}>
          普宁市运动会围棋项目比赛，成绩前八名学员中有六名是益智棋社的学员。
        </Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined />}
          label={
            <Typography.Title level={5} style={{ margin: "0" }}>
              2016年
            </Typography.Title>
          }
        ></Timeline.Item>
        <Timeline.Item label={"2016年初"}>益智棋社新开书法专业。</Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined />}
          label={
            <Typography.Title level={5} style={{ margin: "0" }}>
              2017年
            </Typography.Title>
          }
        ></Timeline.Item>
        <Timeline.Item label={"2017年初"}>益智棋社新开美术专业。</Timeline.Item>
        <Timeline.Item label={"2017年暑期"}>
          益智棋社新开钢琴专业。
        </Timeline.Item>
        <Timeline.Item label={"2017年暑期"}>
          益智棋社围棋专业部分优秀学员参加揭阳市运动会再创辉煌，普宁市选手取得一金二银一铜团体第二名的好成绩！
        </Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined />}
          label={
            <Typography.Title level={5} style={{ margin: "0" }}>
              2018年
            </Typography.Title>
          }
        ></Timeline.Item>
        <Timeline.Item label={"2018年初"}>益智棋社增设象棋专业。</Timeline.Item>
        <Timeline.Item label={"2018年初"}>
          益智棋社负责人被选为揭阳市棋类协会围棋分会副会长，中国象棋分会副会长，国际象棋分会副会长，成为揭阳市唯一一位身兼三棋的副会长。
        </Timeline.Item>
        <Timeline.Item label={"2018年"}>
          益智棋社升级为益智艺术培训中心。
        </Timeline.Item>
      </Timeline>
    </Card>
  );
}
