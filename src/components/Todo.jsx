import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import Header from "./Header";
import { Button } from "antd";
import axios from "axios";
import styles from "../modules/Header.module.css";
const Todo = () => {
  const [state, setstate] = useState({
    user: "",
  });
  const [apiData, setapiData] = useState([]);
  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };

  const submitData = () => {
    //api call
    axios
      .post("https://jsonplaceholder.typicode.com/users", state)
      .then((response) => {
        // console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res);
        setapiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <Row>
        <Col span={12} offset={6}>
          <Input
            placeholder="default size"
            name="user"
            onChange={handleChange}
            prefix={<UserOutlined />}
          />
        </Col>
      </Row>
      <Button type="primary" onClick={submitData} style={{ marginTop: "2vh" }}>
        Add User
      </Button>

      {/* <ul>
            <li>jojsdoj</li>
        </ul> */}
      <ul>
        {apiData.map((ele, i) => (
          <li className={styles.list}>{ele.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
