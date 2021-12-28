import * as React from 'react';
import gql from 'graphql-tag'
import {useQuery} from '@apollo/client'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const singleAuthor = gql`
  query Dog($id: ID!) {
    getAuthor(authorId: $id) {
      id
      name
      email
      age
      books {
        id
        title
      }
    }
  }
`
const CustomHeader = () => {
  return(
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Title</TableCell>
      </TableRow>
    </TableHead>
  )
}

const Author = () => {  
  const { id } = useParams()
  const { loading, error, data } = useQuery(singleAuthor, {
    variables: { id },
  });

  return (
    <div>
      <h1>Single Author Details</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>{data?.getAuthor?.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{data?.getAuthor?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>{data?.getAuthor?.age}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h1>Books</h1>
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <CustomHeader 
            />
            <TableBody>
              {data?.getAuthor?.books?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}
export default Author