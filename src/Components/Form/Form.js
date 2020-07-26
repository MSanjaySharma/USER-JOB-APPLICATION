import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useStyles from "./useStyles";
import { initialValues, positionItems } from "./globalVar";
import schema from "./Utils/schema";
import handleSubmit from "./Utils/handleSubmit";

function JobForm(props) {
  const { classes } = props;
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Container maxWidth="sm" className={classes.container}>
          <Typography
            className={classes.top}
            style={{ textAlign: "center", marginBottom: "2px" }}
            variant="h4"
          >
            THANK YOU FOR YOUR INTEREST
          </Typography>
          <Typography style={{ textAlign: "center" }} variant="h6" gutterBottom>
            WE WOULD LIKE TO HEAR MORE ABOUT YOU !!!
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={schema}
          >
            {({ setFieldValue, setFieldTouched, values, errors, touched }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="outlined"
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      helperText={
                        <ErrorMessage name="firstName"></ErrorMessage>
                      }
                      error={touched.firstName && Boolean(errors.firstName)}
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="outlined"
                      required
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      helperText={<ErrorMessage name="lastName"></ErrorMessage>}
                      error={touched.lastName && Boolean(errors.lastName)}
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      variant="outlined"
                      required
                      id="fullName"
                      name="fullName"
                      label="Full Name"
                      value={
                        (values.fullName = `${values.firstName} ${values.lastName}`)
                      }
                      fullWidth
                      helperText={<ErrorMessage name="fullName"></ErrorMessage>}
                      error={touched.fullName && Boolean(errors.fullName)}
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      variant="outlined"
                      required
                      id="email"
                      name="email"
                      label="Email Address"
                      fullWidth
                      helperText={<ErrorMessage name="email"></ErrorMessage>}
                      error={touched.email && Boolean(errors.email)}
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      variant="outlined"
                      required
                      id="contactNumber"
                      name="contactNumber"
                      label="Contact Number"
                      fullWidth
                      helperText={
                        <ErrorMessage name="contactNumber"></ErrorMessage>
                      }
                      error={
                        touched.contactNumber && Boolean(errors.contactNumber)
                      }
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="outlined"
                      select
                      label="Applying for job"
                      name="jobTitle"
                      fullWidth
                      value={values.jobTitle}
                      helperText={<ErrorMessage name="jobTitle"></ErrorMessage>}
                      error={touched.jobTitle && Boolean(errors.jobTitle)}
                      as={TextField}
                    >
                      {positionItems.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="outlined"
                      required
                      id="experience"
                      name="experience"
                      label="Experience(2 years, 3 months)"
                      fullWidth
                      helperText={
                        <ErrorMessage name="experience"></ErrorMessage>
                      }
                      error={touched.experience && Boolean(errors.experience)}
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      variant="outlined"
                      multiline={true}
                      required
                      id="technicalSkills"
                      name="technicalSkills"
                      label="Technical Skills"
                      rows={4}
                      rowsMax={4}
                      fullWidth
                      helperText={
                        <ErrorMessage name="technicalSkills"></ErrorMessage>
                      }
                      error={
                        touched.technicalSkills &&
                        Boolean(errors.technicalSkills)
                      }
                      as={TextField}
                    />
                    <Grid item xs={12} style={{ marginTop: "16px" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        className={classes.button}
                        color="primary"
                      >
                        SUBMIT FORM
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </>
  );
}

export default withStyles(useStyles)(JobForm);
