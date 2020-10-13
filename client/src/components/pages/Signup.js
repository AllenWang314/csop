import React, { Component, useState } from "react";
import { storage } from "../../firebase"

import { get, post } from "../../utilities";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import { List, Space, Modal, Row, Col, Button, Form, Input, DatePicker, Checkbox } from "antd";
import { CalendarOutlined, TeamOutlined, BookOutlined } from "@ant-design/icons";

import "../../utilities.css";
import "./Signup.css";
import "./Login.css";
import logo from './CSOP Logo big.png';

export default function Signup(props) {
  const [formLogin] = Form.useForm();
  const [formSignup] = Form.useForm();
  const [pageNumber, setPageNumber] = useState(1);
  const [email, setEmail] = useState("");

  const allInputs = {imgUrl: ''}
const [imageAsFile, setImageAsFile] = useState('')
const [imageAsUrl, setImageAsUrl] = useState(allInputs)

const handleFile = (e) => {
  const image = e.target.files[0]
  setImageAsFile(imageFile => (image))
}

const handleFireBaseUpload = e => {
  e.preventDefault()
  console.log('start of upload')
  const uploadTask = storage.ref(`/resumes/${imageAsFile.name}`).put(imageAsFile)
  //initiates the firebase side uploading 
  uploadTask.on('state_changed', 
  (snapShot) => {
    //takes a snap shot of the process as it is happening
    console.log(snapShot)
  }, (err) => {
    //catches the errors
    console.log(err)
  }, () => {
    // gets the functions from storage refences the image storage in firebase by the children
    // gets the download url then sets the image from firebase as the value for the imgUrl key:
    storage.ref('images').child(imageAsFile.name).getDownloadURL()
     .then(fireBaseUrl => {
       setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
     })
  })
}

  let onFinishSignup = (fieldsValue) => {
    formSignup.resetFields();
    props.signup({
      name: fieldsValue.signupName,
      email: fieldsValue.signupEmail,
      password: fieldsValue.signupPassword,
      college: fieldsValue.signupCollege,
    });
  };
  return (
    <div>
      <div>
        <div>
          <div span={12} className="Col">
            <div className="Left">
              <img src={logo} width={"400px"}></img>
            </div>
            <div className="Right">
              <div className="Title">Make an Account</div>
              <div className="Subtitle">Who are you?</div>
              <div>
                <form onSubmit={handleFireBaseUpload}>
                  <input
                    type="file"
                    onChange={handleFile}
                  />
                  <button>upload to firebase</button>
                </form>
              </div>
              <Form className="MainForm" form={formSignup} name={"Signup"} onFinish={onFinishSignup}>
                <Form.Item
                  className="InputTitle"
                  name="signupEmail"
                  label="School Email"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please enter a valid email",
                    },
                  ]}
                >
                  <Input className="InputInfo" placeholder={"email@college.edu"} />
                </Form.Item>
                <Form.Item
                  className="InputTitle"
                  name="signupName"
                  label="Full Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a valid name",
                    },
                  ]}
                >
                  <Input className="InputInfo" placeholder={"First Last"} />
                </Form.Item>
                <Form.Item
                  className="InputTitle"
                  name="signupCollege"
                  label="College"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a valid College",
                    },
                  ]}
                >
                  <Input className="InputInfo" placeholder={"College/University"} />
                </Form.Item>
                <Form.Item
                  className="InputTitle"
                  name="signupPassword"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a password",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (getFieldValue("signupPassword").length >= 6) {
                          return Promise.resolve();
                        }
                        return Promise.reject("Your password is too short!");
                      },
                    }),
                  ]}
                >
                  <Input.Password className="InputInfo" placeholder={"Password"} />
                </Form.Item>
                <Form.Item
                  className="InputTitle"
                  name="signupPassword2"
                  label="Confirm Password"
                  rules={[
                    {
                      required: true,
                      message: "Please re-enter your password",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (getFieldValue("signupPassword") === getFieldValue("signupPassword2")) {
                          return Promise.resolve();
                        }
                        return Promise.reject("Your passwords don't match");
                      },
                    }),
                  ]}
                >
                  <Input.Password className="InputInfo" placeholder={"Re-enter Password"} />
                </Form.Item>
                {/* <input type="file" id="input"/> */}

                <Form.Item>
                  <Button className="SubmitButton" key="submit" type="primary" htmlType="submit">
                    Signup
              </Button>
                </Form.Item>

                <Form.Item>{props.signUpMessage}</Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}