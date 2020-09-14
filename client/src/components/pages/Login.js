import React, { Component, useState } from "react";
import { NavLink } from 'react-router-dom';
import { get, post } from "../../utilities";
// import 'antd/dist/antd.css';
import { List, Space, Modal, Row, Col, Button, Form, Input, DatePicker, Checkbox } from "antd";
import { CalendarOutlined, TeamOutlined, BookOutlined } from "@ant-design/icons";

import "../../utilities.css";
import "./Login.css";
import logo from './CSOP Logo big.png';

export default function Login(props) {
  const [formLogin] = Form.useForm();
  const [formSignup] = Form.useForm();
  const [email, setEmail] = useState("");

  let onFinishLogin = (fieldsValue) => {
    setEmail(fieldsValue.loginEmail)
    formLogin.resetFields();
    props.login({
      email: fieldsValue.loginEmail,
      password: fieldsValue.loginPassword,
    });
  };

  return (
    <div className="Main">
      <Row >
        <Col span={12} className="Col">
          <div className="Left">
            <img src = {logo} width = {"400px"}></img>
          </div>
          <div className="Right">
            <div className="Title">Welcome!</div>
            <div className="Subtitle">Ready to start crushing?</div>
            <Form form={formLogin} name={"Login"} onFinish={onFinishLogin} className="MainForm">
              <Form.Item
                className="InputTitle"
                name="loginEmail"
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input className="InputInfo" placeholder="csop123@mit.edu" />
              </Form.Item>
              
              <Form.Item
                className="InputTitle"
                name="loginPassword"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter a password",
                  },
                ]}
              >
                <Input.Password className="InputInfo" placeholder="time2grind" />
              </Form.Item>

              <Form.Item>
                <Button className="SubmitButton" key="submit" type="primary" htmlType="submit">
                  Login
              </Button>
              </Form.Item>

              <Form.Item>
                {props.loginMessage === "Email not verified!" ? 
                  <div>
                    {props.loginMessage} 
                    <button onClick = {()=>{post("/api/resend", {email: email})}}> Resend Verification Email </button>
                  </div> 
                : props.loginMessage}
              </Form.Item>
            </Form>
            <div className="Other">
              <div>
                  <NavLink className="Links" to="/passwordemail"> Forgot your password? </NavLink>
              </div>
              <div>
                  New member? <NavLink className="Links" to="/signup"> Sign Up</NavLink>
              </div>
            </div>
            </div>
        </Col>
      </Row>
    </div>
  );
}





