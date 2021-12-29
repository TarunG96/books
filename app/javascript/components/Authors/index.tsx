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
import Author from './show'
import { Link } from "react-router-dom";

interface EnhancedTableProps {
  books: any;
}

const authors = gql`
  query authors {
    allAuthors {
      id
      name
      email
      age
    }
  }
`

const CustomHeader = () => {
  return(
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Age</TableCell>
      </TableRow>
    </TableHead>
  )
}

const Authors = () => {
  const {data, loading, error} = useQuery(authors)
  const [rows, setRows] = useState([]);

  useEffect(() => {    
    setRows(data?.allAuthors)
  },[data]);  

  if (loading) {
    return <span>"Loading..."</span>
  }else{
    return (
      <div>
        <h1>Authors</h1>
        <Link to={`/authors/new`}>Create New Author</Link>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <CustomHeader 
            />
            <TableBody>
              {rows?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <Link to={`/authors/${row.id}`}>{row.name}</Link>
                    
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>        
      </div>
    )
  }

}
export default Authors