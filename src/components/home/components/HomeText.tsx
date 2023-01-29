import { Typography } from "antd";

export default function HomeText({
  title,
  subTitle,
  paragraph,
}: {
  title: string;
  subTitle: string;
  paragraph: string |string[];
}) {
  return (
    <>
      <Typography.Title style={{ marginBottom: "5px" }}>
        {title}
      </Typography.Title>
      <Typography.Title level={4} type="secondary" style={{ marginTop: "5px" }}>
        {subTitle}
      </Typography.Title>
      {typeof paragraph == "string" ? (
        <Typography.Paragraph style={{ lineHeight: 2.5 }}>
          {paragraph}
        </Typography.Paragraph>
      ) : (
        paragraph.map((item) => (
          <Typography.Paragraph style={{ lineHeight: 2.5 }} key={item}>
            {item}
          </Typography.Paragraph>
        ))
      )}
    </>
  );
}
