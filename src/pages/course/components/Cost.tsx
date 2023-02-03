import { Space, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";

const majorMap = {
  weiqi: "围棋",
  chess: "象棋",
  painting: "美术",
  calligraphy: "书法",
  piano: "器乐",
};

interface CourseDataType {
  key: string;
  majorType: string;
  courseType: string;
  moneyBasic: string;
  moneyAdvanced: string;
}

const courseColumns: ColumnsType<CourseDataType> = [
  {
    title: "专业",
    dataIndex: "majorType",
    render: (
      text: "weiqi" | "chess" | "painting" | "calligraphy" | "piano"
    ) => {
      return <Typography.Text strong>{majorMap[text]}</Typography.Text>;
    },
    onCell: (_, index) => {
      if (index === 0) {
        return { rowSpan: 5 };
      } else if (index === 5) {
        return { rowSpan: 2 };
      } else if (index === 7) {
        return { rowSpan: 2 };
      } else if (index === 9) {
        return { rowSpan: 3 };
      } else {
        return { rowSpan: 0 };
      }
    },
  },
  {
    title: "班别",
    dataIndex: "courseType",
  },
  {
    title: "学费",
    children: [
      {
        title: "基础班/60节",
        dataIndex: "moneyBasic",
      },
      {
        title: "成长班/120节",
        dataIndex: "moneyAdvanced",
      },
    ],
  },
];

const courseData: CourseDataType[] = [
  {
    key: "1",
    majorType: "weiqi",
    courseType: "入门班",
    moneyBasic: "1350元",
    moneyAdvanced: "2500元",
  },
  {
    key: "2",
    majorType: "weiqi",
    courseType: "初级班",
    moneyBasic: "1450元",
    moneyAdvanced: "2700元",
  },
  {
    key: "3",
    majorType: "weiqi",
    courseType: "中级班",
    moneyBasic: "1550元",
    moneyAdvanced: "2900元",
  },
  {
    key: "4",
    majorType: "weiqi",
    courseType: "高级班",
    moneyBasic: "1650元",
    moneyAdvanced: "3100元",
  },
  {
    key: "5",
    majorType: "weiqi",
    courseType: "段位班",
    moneyBasic: "1750元",
    moneyAdvanced: "3300元",
  },
  {
    key: "6",
    majorType: "chess",
    courseType: "入门班",
    moneyBasic: "1350元",
    moneyAdvanced: "2500元",
  },
  {
    key: "7",
    majorType: "chess",
    courseType: "初级班",
    moneyBasic: "1450元",
    moneyAdvanced: "2700元",
  },
  {
    key: "8",
    majorType: "calligraphy",
    courseType: "硬笔书法",
    moneyBasic: "1350元",
    moneyAdvanced: "2500元",
  },
  {
    key: "9",
    majorType: "calligraphy",
    courseType: "毛笔书法",
    moneyBasic: "1450元",
    moneyAdvanced: "2700元",
  },
  {
    key: "10",
    majorType: "painting",
    courseType: "启蒙班（3-5岁）",
    moneyBasic: "1450元",
    moneyAdvanced: "2700元",
  },
  {
    key: "11",
    majorType: "painting",
    courseType: "创意班（6-8岁）",
    moneyBasic: "1450元",
    moneyAdvanced: "2700元",
  },
  {
    key: "12",
    majorType: "painting",
    courseType: "特长班（9-15岁）",
    moneyBasic: "1450元",
    moneyAdvanced: "2700元",
  },
];

const courseFooter = () => (
  <div>
    <Typography.Title level={5} style={{ marginTop: 0 }}>
      收费标准备注
    </Typography.Title>
    <Typography.Paragraph>
      钢琴班50分钟/节，100元/节。（时间预约）
    </Typography.Paragraph>
    <Typography.Paragraph>
      书法、美术专业每期（60节）另收耗材费用100元。
    </Typography.Paragraph>
  </div>
);

interface CardDataType {
  key: string;
  cardType: string;
  money40: string;
  money80: string;
  money160: string;
  note: string;
}

const cardColumns: ColumnsType<CardDataType> = [
  {
    title: "各卡类",
    dataIndex: "cardType",
    render: (text) => {
      return <Typography.Text strong>{text}</Typography.Text>;
    },
  },
  {
    title: "学费",
    colSpan: 3,
    dataIndex: "money40",
  },
  {
    title: "学费",
    colSpan: 0,
    dataIndex: "money80",
  },
  {
    title: "学费",
    colSpan: 0,
    dataIndex: "money160",
  },
  {
    title: "备注",
    dataIndex: "note",
  },
];

const cardData: CardDataType[] = [
  {
    key: "1",
    cardType: "寒假卡",
    money40: "960元/40节",
    money80: "1680元/80节",
    money160: "2980元/160节",
    note: "寒假有效，最后一项不限专业",
  },
  {
    key: "2",
    cardType: "暑假卡",
    money40: "1980元/84节",
    money80: "3380元/168节",
    money160: "4680元/336节",
    note: "暑假有效，最后一项不限专业",
  },
  {
    key: "3",
    cardType: "年卡",
    money40: "3880元/200节",
    money80: "5280元/288节",
    money160: "12800元/1200节",
    note: "一周年有效，最后一项不限专业",
  },
  {
    key: "4",
    cardType: "季卡",
    money40: "980元/40节",
    money80: "1880元/80节",
    money160: "3480元/160节",
    note: "当季有效，最后一项不限专业",
  },
  {
    key: "5",
    cardType: "月卡",
    money40: "400元/16节",
    money80: "780元/32节",
    money160: "1080元/64节",
    note: "当月有效，最后一项不限专业",
  },
  {
    key: "6",
    cardType: "钢琴卡",
    money40: "1880元/20节",
    money80: "3480元/40节",
    money160: "",
    note: "半年内有效，需预约",
  },
];

const costFooter = () => (
  <div>
    <Typography.Title level={5} style={{marginTop: 0}}>卡类优惠备注</Typography.Title>
    <Typography.Paragraph>
      <Typography.Text strong>1. </Typography.Text>
      <Typography.Text type="danger">2023年2月11日前</Typography.Text>
      ，不限次数的各卡类，选择钢琴不加收学费！2月11日起，若同时选择钢琴课：
    </Typography.Paragraph>
    <Typography.Paragraph>月卡类，另加200元</Typography.Paragraph>
    <Typography.Paragraph>季卡和寒假卡，另加500元 </Typography.Paragraph>
    <Typography.Paragraph>暑假卡，另加1000元 </Typography.Paragraph>
    <Typography.Paragraph>年卡，另加2000元 </Typography.Paragraph>
    <Typography.Paragraph>
      <Typography.Text strong>2. </Typography.Text>
      所有表格的数字仅表示学费，不包含午餐费和耗材料费。
    </Typography.Paragraph>
  </div>
);

export default function Cost() {
  return (
    <>
      <Table
        dataSource={courseData}
        columns={courseColumns}
        pagination={false}
        footer={courseFooter}
      ></Table>
      <Space>   </Space>
      <Table
        dataSource={cardData}
        columns={cardColumns}
        pagination={false}
        footer={costFooter}
      ></Table>
    </>
  );
}
