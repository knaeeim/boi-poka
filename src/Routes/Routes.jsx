import React, { Children, Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/Books/BookDetails";
import About from "../Pages/About/About";
import ReadList from "../Pages/ReadList/ReadList";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "book/:bookId",
        loader: ({ params }) => {
           return fetch('booksData.json')
           .then(response => response.json())
           .then(data => {
            const book = data.find(book => book.bookId === parseInt(params.bookId))
            return book;
           })
        },
        element:<BookDetails></BookDetails>,
      },
      {
        path: "readList",
        loader: () => fetch('booksData.json'),
        element: <ReadList></ReadList>
      }
    ]
  },
]);
