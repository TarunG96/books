import * as React from 'react';
import Book from './Book'
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

const booksQuery = gql`
  query someBooks {
    allBooks {
      id
      title
    }
  }
`
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Book Title', width: 80 }
];

const Books = () => {
  const {data, loading, error} = useQuery(booksQuery)
  const [rows, setRows] = useState([]);

  useEffect(() => {    
    setRows(data?.allBooks)
  },[data]);  

  if (loading) {
    return <span>"Loading..."</span>
  }else{
    return (
      <div>
        <h1>Books</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => (
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

}
export default Books