import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, Redirect, withRouter } from "react-router-dom";

import { CustomInput } from "../../../components/Forms/CustomInput";
import { Button } from "semantic-ui-react";
import { API } from "../../../api/APIOptions";
import { endpointSignIn } from "../../../constants/config";
import AuthSystemWrapp from "../index";

import * as path from "constants/routes";

const SignIn = (props) => {
  const handleSubmit = async (form, data) => {
    API.post(endpointSignIn, "", `Basic ${form.email}:${form.password}`);
  };
  return (
    <AuthSystemWrapp>
      <div className="sign_in_wrapp">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(form, data) => handleSubmit(form, data)}
        >
          {({ values, touched, errors, setFieldValue }) => (
            <Form>
              <Field
                label={"Email"}
                name="email"
                component={CustomInput}
                placeholder="Example@mail.com"
                value={values.email}
              />
              <Field
                label={"Password"}
                type="password"
                name="password"
                component={CustomInput}
                placeholder="Example@mail.com"
                value={values.password}
              />
              <Button type="submit" className="primary-button">
                {"Sign in"}
              </Button>
            </Form>
          )}
        </Formik>
        <h1 className="">Sign in</h1>
        <Link to="sign_up">
          <button className="primaty_button">Sign Up</button>
        </Link>
      </div>
    </AuthSystemWrapp>
  );
};

export default withRouter(SignIn);
