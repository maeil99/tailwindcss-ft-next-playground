import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import InputField, { InputType } from "../components/Formik/InputField";
import Button, { Type } from "../components/Button";
import SelectField from "../components/Formik/SelectField";

const Register = () => {
  const initialValues: IRegisterProps = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  };
  const [data, setData] = useState<IRegisterProps>(initialValues);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), ""],
      "Password must match"
    ),
    gender: Yup.string().required("Required"),
  });

  const onSubmit = (values: IRegisterProps) => {
    console.log(values);
    setData(values);
  };

  const genderOptions = [
    { key: "Select an option", value: "" },
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];
  return (
    <>
      <h1 className="text-center font-bold uppercase py-4">
        Registration Form
      </h1>
      <div className="flex justify-center">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form className="card">
              <div className="space-x-28 py-4">
                <InputField
                  type={InputType.TEXT}
                  name="name"
                  label="Name"
                  className="registerField"
                />
              </div>
              <div className="space-x-28 py-4">
                <InputField
                  type={InputType.EMAIL}
                  name="email"
                  label="Email"
                  className="registerField"
                />
              </div>
              <div className="space-x-20 py-4">
                <InputField
                  type={InputType.PASSWORD}
                  name="password"
                  label="Password"
                  className="registerField"
                />
              </div>
              <div className="space-x-7 py-4">
                <InputField
                  type={InputType.PASSWORD}
                  name="confirmPassword"
                  label="Confirm Password"
                  className="registerField "
                  errorMessageClassname="px-36"
                />
              </div>
              <div className="space-x-28 py-4">
                <SelectField
                  label="Gender"
                  name="gender"
                  options={genderOptions}
                />
              </div>
              <div className="space-x-4 justify-center px-40 pt-8">
                <Button type={Type.SUBMIT}>Submit</Button>
                <Button type={Type.RESET}>Reset</Button>
              </div>
              <br />
            </Form>
          )}
        </Formik>
      </div>
      <br />
      <div className="flex justify-center">
        {data.name.length > 0 && (
          <div className="card">
            <h1 className="font-extrabold text-2xl">Your Response</h1>
            <DisplayData {...data} className="pt-3 font-mono" />
          </div>
        )}
      </div>
    </>
  );
};

export default Register;

interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  className?: string;
}

const DisplayData = (props: IRegisterProps) => {
  return (
    <div className={`${props.className}`}>
      <p>Name : {props.name}</p>
      <p>Email : {props.email}</p>
      <p>Password : {props.password}</p>
      <p>Gender : {props.gender}</p>
    </div>
  );
};
