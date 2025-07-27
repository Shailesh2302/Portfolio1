import React from "react";
import { Button } from "./ui/button";

const SkillButton = ({ name = "", className ="" }) => {
  return <Button className={`${className}`}>{name}</Button>;
};

export default SkillButton;
