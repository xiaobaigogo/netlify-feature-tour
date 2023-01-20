import { Menu } from "antd";
import { routes } from "@/routes";

export default function Header() {
  
  return (
    <>
      <div className="logo"></div>
      <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
    </>
  )
}