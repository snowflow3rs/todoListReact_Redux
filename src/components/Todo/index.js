import React from "react";
import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, priority, completed }) {
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <Row
      className={`flex mt-[4px] justify-between ${
        checked ? "opacity-50 line-through" : ""
      }`}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
