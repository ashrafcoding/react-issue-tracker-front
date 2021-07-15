import React, { useState, useEffect } from 'react'
import {  useQuery, gql} from "@apollo/client";
import {Loyalty, ReportProblemOutlined, Done} from '@material-ui/icons';
import "./home.css";
import TopCard from "./TopCard";

const loadBugs = gql`
query{
  bugs{
    id
    name
    assigned
    status
  }
}`

export default function Home() {

    const { loading, error, data } = useQuery(loadBugs);
    const [dataProvider, setDataProvider] = useState()
    const [openCount, setOpenCount] = useState()
    const [closedCount, setClosedCount] = useState()

    useEffect(() => {
        if(data){
            setDataProvider(data)
            setOpenCount(data.bugs.filter(bug=>bug.status === "In Progress").length) 
            setClosedCount(data.bugs.filter(bug=>bug.status === "Closed").length) 
        }
    }, [data])

    const divStyle = { 
        blue: "linear-gradient( 45deg, #6a11cb , #2575fc)",
        green: "linear-gradient(45deg, #00b09b, #96c93d)",
        red: "linear-gradient(45deg, #ee0979, #ff6a00)"
    } 

    return (
        <div className="home">
            <TopCard icon={<Loyalty/>} number="Total" amount={dataProvider && dataProvider.bugs.length} colour={divStyle.blue}/>
            <TopCard icon={<ReportProblemOutlined/>} number="Open" amount={openCount} colour={divStyle.green}/>
            <TopCard icon={<Done/>} number="Closed" amount={closedCount} colour={divStyle.red} />           
        </div>
    )
}



