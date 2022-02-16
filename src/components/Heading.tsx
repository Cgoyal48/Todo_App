import React from "react";
import "./Heading.css";

type HeadingProps = {
  userName: string;
};

const Heading: React.FC<HeadingProps> = ({ userName }): JSX.Element => {
  return (
    <div className="Heading_text">{`Hey ${userName}! Here are your all Todos`}</div>
  );
};

export default Heading;
