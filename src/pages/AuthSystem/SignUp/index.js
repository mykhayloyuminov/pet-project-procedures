import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button } from "semantic-ui-react";
import { API } from "../../../api/APIOptions";
import { endpointSignUp } from "../../../constants/config";
import token from "basic-auth-token";
import * as Yup from "yup";

import { useTranslation } from "react-i18next";
import { CustomInput } from "../../../components/Forms/CustomInput";
import AuthSystemWrapp from "../index";

import * as path from "constants/routes";

const SignUp = (props) => {
  const { t } = useTranslation();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("E-mail is not valid!"))
      .required(t("E-mail is required!")),
    name: Yup.string().required(t("Name is required!")),
    city: Yup.string().required(t("City is required!")),
    country: Yup.string().required(t("Country is required!")),
    phone: Yup.string()
      .matches(phoneRegExp, t("Phone is incorrect!"))
      .required(t("Phone is required!")),
    address: Yup.string().required(t("Address is required!")),
    email: Yup.string()
      .email(t("E-mail is not valid!"))
      .required(t("E-mail is required!")),
    password1: Yup.string()
      .min(8, t(`Password has to be longer than 8 characters!`))
      .required(t("Password is required")),
    password2: Yup.string()
      .min(8)
      .oneOf([Yup.ref("password1"), null], t("Password doesn't match"))
      .required(t("Password confirm is required")),
  });
  const handleSubmit = async (form, data) => {
    API.post(endpointSignUp, {
      data: {
        type: "hospitals",
        attributes: {
          email: form.email,
          password_hashed: form.password,
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
        if (result.data.id.length) {
          window.localStorage.setItem(
            "forHeader",
            `Basic ${token(form.email, form.password)}`
          );
          window.localStorage.setItem("id", result.data.id);
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
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            email: "",
            password1: "",
            password2: "",
            city: "",
            country: "",
            name: "",
            phone: "",
            address: "",
          }}
          onSubmit={(form, data) => handleSubmit(form, data)}
          validationSchema={SignupSchema}
        >
          {({ values, touched, errors, setFieldValue }) => (
            <Form>
              <div style={{ display: "flex" }}>
                <div style={{ width: "50%", marginRight: "10px" }}>
                  <Field
                    label={"Name"}
                    name="name"
                    component={CustomInput}
                    placeholder="Your Name"
                    value={values.name}
                  />
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
                    name="password1"
                    type="password"
                    component={CustomInput}
                    placeholder={"New Password"}
                    value={values.password1}
                  />
                  <Field
                    label={"Password"}
                    name="password2"
                    type="password"
                    component={CustomInput}
                    placeholder={"New Password"}
                    value={values.password2}
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <Field
                    label={"Country"}
                    name="country"
                    component={CustomInput}
                    placeholder="Your country"
                    value={values.country}
                  />
                  <Field
                    label={"City"}
                    name="city"
                    component={CustomInput}
                    placeholder="Your city"
                    value={values.city}
                  />
                  <Field
                    label={"Address"}
                    name="address"
                    component={CustomInput}
                    placeholder="Your address"
                    value={values.address}
                  />
                  <Field
                    label={"Phone"}
                    name="phone"
                    component={CustomInput}
                    placeholder="Your phone"
                    value={values.phone}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button type="submit" className="primary_button">
                  {"Sign up"}
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
          <span style={{ fontSize: "14px" }}>Already have an account?</span>
          <Link to="sign_in">Sign In</Link>
        </div>
      </div>
    </AuthSystemWrapp>
  );
};

export default withRouter(SignUp);
