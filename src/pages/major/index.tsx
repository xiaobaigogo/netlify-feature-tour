import { useLocation } from "react-router-dom";
import Weiqi from "./components/weiqi";
import Chess from "./components/chess";
import Painting from "./components/painting";
import Calligraphy from "./components/calligraphy";
import { useEffect } from "react";

import style from "./index.module.less";
import { Card } from "antd";
import Piano from "./components/piano";
import Catalogue from "./components/catalogue";
  

export default function Major() {
  const location = useLocation();

  const scrollToAnchor = () => {
    let anchorName = location.hash;
    if (anchorName) {
      anchorName = anchorName.replace("#", "");
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };

  useEffect(() => {
    scrollToAnchor();
  }, []);

  return (
    <Card className={style.major}>
      <div id="weiqi">
        <Weiqi />
      </div>
      <div id="chess">
        <Chess />
      </div>
      <div id="calligraphy">
        <Calligraphy />
      </div>
      <div id="painting">
        <Painting />
      </div>
      <div id="piano">
        <Piano />
      </div>
      <Catalogue></Catalogue>
    </Card>
  );
}
