import { Typography } from "antd";
import Table, { ColumnsType } from "antd/es/table";

interface TimeDataType {
  key: string;
  timeType: string;
  courseNumber: string;
  timeDetail: string;
}

const timeColumns: ColumnsType<TimeDataType> = [
  {
    title: "",
    dataIndex: "timeType",
    render: (text) => {
      return <Typography.Text strong>{text}</Typography.Text>;
    },
    onCell: (_, index) => {
      if (index === 0) {
        return { rowSpan: 2 };
      } else if (index === 2) {
        return { rowSpan: 2 };
      } else {
        return { rowSpan: 0 };
      }
    },
  },
  {
    title: "节次",
    dataIndex: "courseNumber",
  },
  {
    title: "时间",
    dataIndex: "timeDetail",
  },
];

const timeData: TimeDataType[] = [
  {
    key: "1",
    timeType: "上午",
    courseNumber: "第一、二节",
    timeDetail: "8:20-9:50",
  },
  {
    key: "2",
    timeType: "上午",
    courseNumber: "第三、四节",
    timeDetail: "10:00-11:30",
  },
  {
    key: "3",
    timeType: "下午",
    courseNumber: "第五、六节",
    timeDetail: "13:50-15:20",
  },
  {
    key: "4",
    timeType: "下午",
    courseNumber: "第七、八节",
    timeDetail: "15:30-17:00",
  },
];

export default function Courses() {
  return (
    <>
      <Table
        dataSource={timeData}
        columns={timeColumns}
        pagination={false}
      ></Table>
    </>
  );
}
