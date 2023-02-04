import DividerTemp from "@/components/DividerTemp/DividerTemp";
import { Consume, Schedule, Ticket } from "@icon-park/react";
import { Card } from "antd";
import Cost from "./components/Cost";
import Courses from "./components/Courses";
import Discount from "./components/Discount";

export default function course() {

  return (
    <Card style={{margin: '0 auto', width: '80%'}}>
      <div>
        <DividerTemp
          name={"课程安排"}
          icon={<Schedule theme="outline" size="24" fill="#333" />}
        />
        <Courses></Courses>
      </div>
      <div>
        <DividerTemp
          name={"收费标准"}
          icon={<Consume theme="outline" size="24" fill="#333" />}
        />
        <Cost></Cost>
      </div>
      <div>
        <DividerTemp
          name={"优惠措施"}
          icon={<Ticket theme="outline" size="24" fill="#333" />}
        />
        <Discount></Discount>
      </div>
    </Card>
  );
}