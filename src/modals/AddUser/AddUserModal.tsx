import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { PUSH_USER } from "../../application/actions/usersAction";

interface IProps {
    onClose: Function;
    visible: boolean;
    user?: any;
}

const AddUserModal = ({ onClose, visible, user }: IProps) => {
    const dispatch = useDispatch();
    const [data, setData] = useState<any>({
        email: "",
        firstName: "",
        lastName: "",
        website: "",
        companyName: "",
    });

    const { users } = useSelector((state: any) => state.usersReducer);

    const onSubmit = (values: any, { setSubmitting }: any) => {
        const user = { id: users[users.length - 1].id + 1, isAdd: true, ...values };
        dispatch(PUSH_USER(user));
        setSubmitting(false);
        onClose();
    };
    const onValidate = (values: any) => {
        const errors: any = {};
        if (!values.email) errors.email = "Email is required";
        if (!values.firstName) errors.firstName = "First name is required";
        if (!values.lastName) errors.lastName = "Last name is required";
        if (!values.companyName) errors.companyName = "Company name is required";
        if (!values.website) errors.website = "Website is required";
        return errors;
    };
    useEffect(() => {
        if (user) {
            setData(user);
        }
    }, [user]);
    return (
        <div>
            <Drawer title="Add User" placement="right" onClose={() => onClose()} visible={visible}>
                <Formik initialValues={data} validate={onValidate} onSubmit={onSubmit}>
                    {({ isSubmitting }: any) => {
                        return (
                            <Form>
                                <div className="form-block">
                                    <div className="input-block">
                                        <label htmlFor="">Email</label>
                                        <Field type="text" name="email" placeholder="Enter email" />
                                        <ErrorMessage className="error" name="email" component="p" />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">First name</label>
                                        <Field type="text" name="firstName" placeholder="Enter first name" />
                                        <ErrorMessage className="error" name="firstName" component="p" />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Last name</label>
                                        <Field type="text" name="lastName" placeholder="Enter last name" />
                                        <ErrorMessage className="error" name="lastName" component="p" />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Company name</label>
                                        <Field type="text" name="companyName" placeholder="Enter company name" />
                                        <ErrorMessage className="error" name="companyName" component="p" />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Website</label>
                                        <Field type="text" name="website" placeholder="Enter website" />
                                        <ErrorMessage className="error" name="website" component="p" />
                                    </div>
                                    <div className="action-sumbit-block">
                                        <Button disabled={isSubmitting} htmlType="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </Drawer>
        </div>
    );
};

export default AddUserModal;
