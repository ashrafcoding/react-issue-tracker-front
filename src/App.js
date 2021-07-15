import React, { useState, useEffect } from 'react'
import {  useQuery, gql} from "@apollo/client";

import "./index.css"
import Topbar from './componenets/Topbar';
import  Sidebar from "./componenets/Sidebar";
import Home from './componenets/Home';

// const loadBugs = gql`
// query{
//   bugs{
//     id
//     name
//     assigned
//   }
// }`


function APP(){

  //  const { loading, error, data } = useQuery(loadBugs);
  //  const [dataProvider, setDataProvider] = useState()

  //  useEffect(() => {
  //    setDataProvider(data)
  //  }, [data])
  //  console.log(dataProvider);
   
   
    return (
      <>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
      </>     
    )
  
}

export default APP

