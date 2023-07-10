import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, useField, Form } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Container, TableBody, TableContainer, TableHead, TableRow, TableCell, Table, TextField, Button, Box } from '@mui/material';

const BasicForm = () => {

  const [toDoList, settoDoList] = useState([]);
  const navigate = useNavigate();

  const mappedItems = toDoList.filter((item) => {
    <TableBody key={item.key}>
      <TableCell>{item.firstName}</TableCell>
      <TableCell>{item.lastName}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.addToDo}</TableCell>
    </TableBody>
  })

  return (
    <Container maxWidth="md">
      <h1>TODO</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          addtoDo: ''
        }}
        onSubmit={(values) => {

        }}
      >
        <Form>
          <Box sx={ { display: 'flex', flexDirection: 'column', alignCenter: 'center', gap: 2, mt: 3 }}>
            <label htmlFor="todo">First Name</label>
            <br />
              <Field name="firstName" placeholder="" />
            <label htmlFor="todo"> </label>
            <br />
              <Field id="lastName" placeholder="TextHere" />
            <label htmlFor="todo"></label>
            <br />
              <Field id="email" placeholder="TextHere" />
            <label htmlFor="todo"></label>
            <br />
              <Field id="addToDo" placeholder="TextHere" />
            <Button variant="outlined" type="submit">Submit</Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  )
}

export default BasicForm;
