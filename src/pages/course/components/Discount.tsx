import { Typography } from "antd";

export default function Discount() {
  return (
    <>
      <div>
        <Typography.Title level={3}>1. 年费优惠</Typography.Title>
        <Typography.Paragraph>
          年费不分班别，不再打折（均不含午餐费）。
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text strong>1. </Typography.Text>
           学期每周末学习一次，寒、暑假每天学习一次，全年共200节课，尊享年费3880元。
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text strong>2. </Typography.Text>
           学期每周末学习二次，寒、暑假每天学习一次，全年共288节课，尊享年费5280元。  
        </Typography.Paragraph>
        <Typography.Title level={3}>2. 团体优惠</Typography.Title>
        <Typography.Paragraph>
          亲戚朋友组团同时报名学习，人数3人或3人以上的，该团体所有学员尊享9.2折。
        </Typography.Paragraph>
        <Typography.Title level={3}>3. 多选优惠</Typography.Title>
        <Typography.Paragraph>
          围棋、象棋、书法、美术四个专业中同时报读二个的，学费尊享9.5折，同时报读三个的，学费尊享9折，同时报读四个的，学费尊享8.5折。
        </Typography.Paragraph>
        <Typography.Title level={3}>4. 时段优惠</Typography.Title>
        <Typography.Paragraph>
          第一优惠时段：当期培训结束即缴费注册的学费尊享9.5折。同时报读两个专业并缴费注册的，赠送另一个专业的学费。
        </Typography.Paragraph>
        <Typography.Paragraph>
          第二优惠时段：下期培训开始前缴费注册的学费尊享9.8折。同时报读两个专业并缴费注册的，赠送另一个专业一半的学费。 
        </Typography.Paragraph>
        <Typography.Paragraph>
          1月31日（即正月初十）前缴费注册,尊享5000抵6000，10000抵12000的大优惠！
        </Typography.Paragraph>
        <Typography.Paragraph>
          春季班开班（2月11日)前缴费注册，尊享5000抵5500，10000抵11000的大优惠！
        </Typography.Paragraph>
        <Typography.Title level={3}>5. 教师子女优惠</Typography.Title>
        <Typography.Paragraph>
          凡教师子女（凭教师证或教师资格证等有效证件）到艺术培训中心就读的，在优惠时段内缴费注册的，除尊享相关时段优惠外，加赠高级围棋子一副，围棋、象棋双用棋盘一块。 
        </Typography.Paragraph>
        <Typography.Title level={3}>6. 新学年福利</Typography.Title>
        <Typography.Paragraph>
          新学员在下期培训开始前转发艺术培训中心相关资料至业主群，同学群......和朋友圈并获点赞48个或以上的，仅需微信支付99元，即可获赠艺术培训中心3次体验课（教材费另计，最高不超过20元）！
        </Typography.Paragraph>
      </div>
      <div>
        <Typography.Paragraph type="secondary">
          本优惠措施一至四条不可重复，取优惠最大者！
        </Typography.Paragraph>
        <Typography.Paragraph type="secondary">
          五至六条可与前面的优惠措施重复！
        </Typography.Paragraph>
        <Typography.Paragraph type="secondary">
          解释权归益智艺术培训中心。
        </Typography.Paragraph>
      </div>
    </>
  );
}
