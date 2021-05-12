import React, { useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button } from "semantic-ui-react";
import { API } from "../../../api/APIOptions";
import { endpointSignUp } from "../../../constants/config";
import token from "basic-auth-token";
import * as Yup from "yup";
import { error, loading } from "../../../utils/index";

import { useTranslation } from "react-i18next";
import { CustomInput } from "../../../components/Forms/CustomInput";
import AuthSystemWrapp from "../index";

import * as path from "constants/routes";

const SignUp = (props) => {
  const [signOut, setSignOut] = useState({
    loading: false,
    error: false,
  });
  const { t } = useTranslation();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const SignupSchema = Yup.object().shape({
    // email: Yup.string()
    //   .email(t("E-mail is not valid!"))
    //   .required(t("E-mail is required!")),
    name: Yup.string().required(t("Name is required!")),
    city: Yup.string().required(t("City is required!")),
    country: Yup.string().required(t("Country is required!")),
    phone: Yup.string()
      .matches(phoneRegExp, t("Phone is incorrect!"))
      .required(t("Phone is required!")),
    address: Yup.string().required(t("Address is required!")),
    password1: Yup.string()
      .min(8, t(`Password has to be longer than 8 characters!`))
      .required(t("Password is required!")),
    password2: Yup.string()
      .min(8)
      .oneOf([Yup.ref("password1"), null], t("Password doesn't match"))
      .required(t("Password confirm is required")),
  });
  const handleSubmit = async (form, data) => {
    setSignOut({ ...signOut, loading: true });
    API.post(endpointSignUp, {
      data: {
        type: "hospitals",
        attributes: {
          email: form.email,
          password_hashed: form.password1,
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
          setSignOut({ ...signOut, loading: false });
        }
      })
      .catch((e) => {
        setSignOut({ ...signOut, error: true });
        console.log(e);
      });
  };
  if (signOut.error) {
    return error;
  }
  if (signOut.loading) {
    return loading;
  }
  return (
    <AuthSystemWrapp>
      <div className="sign_in_wrapp">
        <h1>{t("Sign Up")}</h1>
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
                    label={t("Name")}
                    name="name"
                    component={CustomInput}
                    placeholder={t("Your Name")}
                    value={values.name}
                  />
                  <Field
                    label={t("Email")}
                    name="email"
                    type="email"
                    component={CustomInput}
                    placeholder="Example@mail.com"
                    value={values.email}
                  />
                  <Field
                    label={t("Password")}
                    name="password1"
                    type="password"
                    component={CustomInput}
                    placeholder={t("New Password")}
                    value={values.password1}
                  />
                  <Field
                    label={t("Password")}
                    name="password2"
                    type="password"
                    component={CustomInput}
                    placeholder={t("New Password")}
                    value={values.password2}
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <Field
                    label={t("Country")}
                    name="country"
                    component={CustomInput}
                    placeholder={t("Your country")}
                    value={values.country}
                  />
                  <Field
                    label={t("City")}
                    name="city"
                    component={CustomInput}
                    placeholder={t("Your city")}
                    value={values.city}
                  />
                  <Field
                    label={t("Address")}
                    name="address"
                    component={CustomInput}
                    placeholder="Your address"
                    value={values.address}
                  />
                  <Field
                    label={t("Phone")}
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
                  {t("Sign Up")}
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
          <span style={{ fontSize: "14px" }}>
            {t("Already have an account?")}
          </span>
          <Link to="sign_in">{t("Sign In")}</Link>
        </div>
      </div>
    </AuthSystemWrapp>
  );
};

export default withRouter(SignUp);
