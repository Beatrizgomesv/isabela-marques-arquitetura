import React from "react";
import * as Icons from "./icons";

const CustomIcon = ({ name, ...props }) => {
  const AiIcon = Icons[name];
  if (!AiIcon) return <p>Icon not found!</p>;

  return <AiIcon {...props} />;
};

export default CustomIcon;