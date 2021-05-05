import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button } from "semantic-ui-react";
import { API } from "../../../api/APIOptions";
import { endpointSignUp } from "../../../constants/config";

import { CustomInput } from "../../../components/Forms/CustomInput";
import AuthSystemWrapp from "../index";

import * as path from "constants/routes";

const SignUp = (props) => {
  const handleSubmit = async (form, data) => {
    API.post(endpointSignUp, {
      data: {
        type: "hospitals",
        attributes: {
          email: form.email,
          password: form.password,
          city: form.city,
          country: form.country,
          name: form.name,
          phone: form.phone,
          address: form.address,
        },
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <AuthSystemWrapp>
      <div className="sign_in_wrapp">
        <Formik
          initialValues={{
            email: "",
            password: "",
            city: "",
            country: "",
            name: "",
            phone: "",
            address: "",
          }}
          onSubmit={(form, data) => handleSubmit(form, data)}
        >
          {({ values, touched, errors, setFieldValue }) => (
            <Form>
              <Field
                label={"Country"}
                name="country"
                component={CustomInput}
                placeholder="Example@mail.com"
                value={values.country}
              />
              <Field
                label={"City"}
                name="city"
                component={CustomInput}
                placeholder="Example@mail.com"
                value={values.city}
              />
              <Field
                label={"name"}
                name="name"
                component={CustomInput}
                placeholder="Example@mail.com"
                value={values.name}
              />
              <Field
                label={"Phone"}
                name="phone"
                component={CustomInput}
                placeholder="Example@mail.com"
                value={values.phone}
              />
              <Field
                label={"Address"}
                name="address"
                component={CustomInput}
                placeholder="Example@mail.com"
                value={values.address}
              />
              <Field
                label={"Email"}
                name="email"
                component={CustomInput}
                placeholder="Example@mail.com"
                value={values.email}
              />
              <Field
                label={"Password"}
                name="password"
                type="password"
                component={CustomInput}
                placeholder={"New Password"}
                value={values.password1}
              />
              <Button type="submit" className="primary-button">
                {"Sign up"}
              </Button>
            </Form>
          )}
        </Formik>
        <h1 className="">Sign Up</h1>
        <Link to="sign_in">
          <button className="primaty_button">Sign Ip</button>
        </Link>
      </div>
    </AuthSystemWrapp>
  );
};

export default withRouter(SignUp);
