import React, { useState } from "react";
import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../redux/action";
import { v4 as uuidv4 } from "uuid";
import { groupSelector } from "../redux/selectors";
import { todoListReducer } from "./todoListReducer";
export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();
  const todoList = useSelector(groupSelector);

  const handleChangeInput = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(
      todoListReducer.actions.addToDo({
        id: uuidv4(),
        name: todo,
        priority: priority,
        completed: false,
      })
    );
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact
          value={todo}
          onChange={handleChangeInput}
          style={{ display: "flex" }}
        >
          <Input />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={(value) => {
              setPriority(value);
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
          <Button onClick={handleSubmit} type="primary" className="bg-black">
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
