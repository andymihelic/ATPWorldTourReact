import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignUpForm = () => {

return(
    <Formik
        initialValues={{name: "",
                        userName: "",
                        email: "",
                        password: ""
                        }}

        validationSchema = {Yup.object({
                Name:Yup.string()
                .min(2, "Must be at least 2 characters long")
                .max(30, "Max 30 characters long")
                .required("Field required"),
                            
                userName:Yup.string()
                .min(3, "Must be at least 3 characters long")
                .max(25, "Max 25 characters long")
                .required("Field required"),

                password:Yup.string()
                .min(3, "Must be at least 3 characters long")
                .max(25, "Max 25 characters long")
                .required("Field required"),
                
                email:Yup.string()
                .email("Must be a valid email address")
                .required("Field required")
            })}
        
        onSubmit={(values, {setSubmitting}) => {
                setTimeout(() =>{
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false)
                }, 500)
        }}
        >
        <Form>
            <label htmlFor="name"> Name </label>
            <Field name="name" id="name" type="text"/>
            <br />
            <ErrorMessage name="name"/>
            <br />

            <label htmlFor="userName">Username</label>
            <Field name="userName" id="userName" type="text"/>
            <br />
            <ErrorMessage name="userName"/>
            <br />
            
            <label htmlFor="email">Email</label>
            <Field name="email" id="email" type="text"/>
            <br />
            <ErrorMessage name="email"/>
            <br />

            <label htmlFor="password">Password</label>
            <Field name="password" id="password" type="text"/>
            <br />
            <ErrorMessage name="password"/>
            <br />

            <button type="submit"> Submit </button>
        </Form>

        </Formik>
        )
    }
    
export default SignUpForm