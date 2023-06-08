import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, useField, Form } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Container, TableBody, TableContainer, TableHead, TableRow, TableCell, Table, TextField, Button, Box} from '@mui/material';

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
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => { }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="Add ToDo" placeholder="TextHere" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default BasicForm;
