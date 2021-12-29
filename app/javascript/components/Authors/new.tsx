import * as React from 'react';
import gql from 'graphql-tag'
import {useMutation} from '@apollo/client'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const saveAuthor = gql`
  mutation saveAuthor($name: String!, $email: String!, $age: Int!) {
    createAuthor(
      name: $name,
      email: $email,
      age: $age
    ){
      id
      name
      email
      age
    }
  }
`

const newAuthor = ({history}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState();
  const [redirect, setRedirect] = useState(false);
  const [mutateFunction, { data, loading, error }] = useMutation(saveAuthor);

  const submitForm = () => {
    mutateFunction({ variables: { 
      name: name,
      email: email,
      age: age 
    } }).then((result) => {
      setRedirect(true)
    })
  }

  if(redirect){
    return window.location.href = "/authors"
  }else{
    return (
      <Box component="div">
        <h2>Create a New Author</h2>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Name" variant="standard" defaultValue={name} onChange={(e) => setName(e.target.value)} />
          <TextField id="standard-basic" label="Email" variant="standard" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField id="standard-basic" label="Age" variant="standard" defaultValue={age} onChange={(e) => setAge(parseInt(e.target.value))} />
        </Box>
        <Box component="div">
          <Button variant="contained" onClick={() => submitForm()}>Create</Button>
        </Box>
      </Box>
    );
  }

  
}

export default newAuthor