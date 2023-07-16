import React, { useState } from "react";
import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
import { filterPriority, filterStatus, searchFilter } from "../redux/action";
import { filterReducer } from "./filterReducer";

const { Search } = Input;
export default function Filters() {
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState("All");

  const [priority, setPriority] = useState([]);
  const dispatch = useDispatch();

  return (
    <Row className="justify-center">
      <Col span={24}>
        <Typography.Paragraph className=" font-bold mb-3 mt-10">
          Search
        </Typography.Paragraph>
        <Search
          placeholder="Searching for todolist..."
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            dispatch(filterReducer.actions.searchFilter(e.target.value));
          }}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph className=" font-bold mb-3 mt-8">
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            dispatch(filterReducer.actions.filterStatus(e.target.value));
          }}
        >
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={priority}
          onChange={(value) => {
            setPriority(value);
            dispatch(filterReducer.actions.filterPriority(value));
          }}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
