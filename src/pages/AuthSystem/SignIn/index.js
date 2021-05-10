import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, Redirect, withRouter } from "react-router-dom";
import token from "basic-auth-token";

import { CustomInput } from "../../../components/Forms/CustomInput";
import { Button } from "semantic-ui-react";
import { API } from "../../../api/APIOptions";
import { endpointSignIn } from "../../../constants/config";
import AuthSystemWrapp from "../index";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

import * as path from "constants/routes";

const SignIn = (props) => {
  const { t } = useTranslation();
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("E-mail is not valid!"))
      .required(t("E-mail is required!")),
    password: Yup.string()
      .min(8, t(`Password has to be longer than 8 characters!`))
      .required(t("Password is required!")),
  });
  const handleSubmit = async (form, data) => {
    API.post(
      `${endpointSignIn}/${form.email}`,
      "",
      `Basic ${token(form.email, form.password)}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (!result.data) {
          let errors = {};
          const element = "User with specified email does not exists.";
          errors["email"] = element;
          data.setErrors(errors);
        }
        if (result.data[0].id.length) {
          window.localStorage.setItem(
            "forHeader",
            `Basic ${token(form.email, form.password)}`
          );
          window.localStorage.setItem("id", result.data[0].id);
          props.history.push(path.PROCEDURES);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <AuthSystemWrapp>
      <div className="sign_in_wrapp">
        <h1>Sign In</h1>
        <Formik
          initialValues={{
            email: "admin@admin.com",
            password: "admin@admin.com",
          }}
          onSubmit={(form, data) => handleSubmit(form, data)}
          validationSchema={SignupSchema}
        >
          {({ values, touched, errors, setFieldValue }) => (
            <Form>
              <Field
                label={"Email"}
                name="email"
                type="email"
                component={CustomInput}
                placeholder="Example@mail.com"
                value={values.email}
              />
              <Field
                label={"Password"}
                type="password"
                name="password"
                component={CustomInput}
                placeholder="Your password"
                value={values.password}
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button type="submit" className="primary_button">
                  {"Sign in"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <span style={{ fontSize: "14px" }}>Don't have an account?</span>
          <Link to="sign_up">Sign Up</Link>
        </div>
      </div>
    </AuthSystemWrapp>
  );
};

export default withRouter(SignIn);
