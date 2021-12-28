import React from 'react'
import Book from './Book'
import gql from 'graphql-tag'
import {useQuery} from '@apollo/client'

const booksQuery = gql`
  query allBooks {
    books {
      id
      title
    }
  }
`
const Books = () => {
  const {data, loading, error} = useQuery(booksQuery)
  if (loading) {
    return <span>"Loading..."</span>
  }
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.books.map((book) => (
          <Book {...book} key={book.id} />
        ))}
      </ul>
    </div>
  )
}
export default Books