import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        validationSchema: Yup.object({
            firstName:Yup.string()
                .min(2, "Must be at least 2 characters long")
                .max(15, "Max 15 characters long")
                .required("Field required"),
            
            lastName:Yup.string()
                .min(3, "Must be at least 3 characters long")
                .max(25, "Max 25 characters long")
                .required("Field required"),

            email:Yup.string()
                .email("Must be a valid email address")
                .required("Field required"),

        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                autoFocus
                type="text"
                name="firstName"
                id="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName} />
            <div>
                {formik.touched.firstName && formik.errors.firstName && formik.errors.firstName}

            </div>
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName} />

            <div>
                {formik.touched.lastName && formik.errors.lastName && formik.errors.lastName}

            </div>
            <br />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} />
            <div>
                {formik.touched.email && formik.errors.email && formik.errors.email}

            </div>
            <br />
            <input type="submit"></input>
        </form>
    )
}

export default SignUpForm