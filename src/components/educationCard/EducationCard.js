import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const imgRef = createRef();
  const {isDark} = useContext(StyleContext);

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => {
          // 检查是否是标题（以###开头）
          if (item.startsWith("###")) {
            return (
              <li key={i} className={`education-bullet-title ${isDark ? "dark-mode" : ""}`}>
                {item.replace("###", "").trim()}
              </li>
            );
          }
          // 检查是否是子项（以-开头）
          else if (item.startsWith("-")) {
            const text = item.replace("-", "").trim();
            // 处理加粗文本
            const parts = text.split(/(\*\*.*?\*\*)/g);
            return (
              <li key={i} className={`education-bullet-item ${isDark ? "dark-mode" : ""}`}>
                {parts.map((part, j) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={j} className={isDark ? "dark-mode" : ""}>{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </li>
            );
          }
          // 检查是否是子子项（以空格开头）
          else if (item.startsWith("  -")) {
            const text = item.replace("  -", "").trim();
            // 处理加粗文本
            const parts = text.split(/(\*\*.*?\*\*)/g);
            return (
              <li key={i} className={`education-bullet-subitem ${isDark ? "dark-mode" : ""}`}>
                {parts.map((part, j) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={j} className={isDark ? "dark-mode" : ""}>{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </li>
            );
          }
          // 空行
          else if (item === "") {
            return <li key={i} className="education-bullet-space"></li>;
          }
          // 其他内容
          else {
            const parts = item.split(/(\*\*.*?\*\*)/g);
            return (
              <li key={i} className={`education-bullet-text ${isDark ? "dark-mode" : ""}`}>
                {parts.map((part, j) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={j} className={isDark ? "dark-mode" : ""}>{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </li>
            );
          }
        })
      : null;
  };

  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-right">
            <h5 className="education-text-school">
              <a 
                href="https://www.waseda.jp/top/en/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="school-link"
              >
                {school.schoolName}
              </a>
            </h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className={`${isDark ? "dark-mode" : ""} education-text-grade`}>
                {school.grade}
              </p>
              <p className={`education-text-desc ${isDark ? "dark-mode" : ""}`}>
                {school.desc}
              </p>
              <div className={`education-text-bullets ${isDark ? "dark-mode" : ""}`}>
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
