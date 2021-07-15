import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Loyalty, ReportProblemOutlined, Done } from "@material-ui/icons";
import "./home.css";
import TopCard from "./TopCard";
import Donut from "./Donut";
import Priority from "./Priority";

const loadBugs = gql`
  query {
    bugs {
      id
      name
      assigned
      status
      priority
    }
  }
`;

export default function Home() {

  const { loading, error, data } = useQuery(loadBugs);
  const [dataProvider, setDataProvider] = useState();
  const [openCount, setOpenCount] = useState();
  const [closedCount, setClosedCount] = useState();
  const [notStartedCount, setNotStartedCount] = useState();
  const [blockedCount, setBlockedCount] = useState();
  const [priorityCount, setPriorityCount] = useState()


  useEffect(() => {
    if (data) {
      setDataProvider(data);
      setOpenCount(
        data.bugs.filter((bug) => bug.status === "In Progress").length
      );
      setClosedCount(data.bugs.filter((bug) => bug.status === "Closed").length);
      setNotStartedCount(
        data.bugs.filter((bug) => bug.status === "Not Started").length
      );
      setBlockedCount(
        data.bugs.filter((bug) => bug.status === "Blocked").length
      );

      let priorityobj = {low: 0, med: 0, high: 0}

      data.bugs.map(bug=>{
          if(bug.priority === "3"){priorityobj.low = priorityobj.low + 1}
          if(bug.priority === "2"){priorityobj.med = priorityobj.med + 1}
          if(bug.priority === "1"){priorityobj.high = priorityobj.high + 1}
      })
      setPriorityCount(priorityobj)
    }
  }, [data]);

  const divStyle = {
    blue: "linear-gradient( 45deg, #6a11cb , #2575fc)",
    green: "linear-gradient(45deg, #00b09b, #96c93d)",
    red: "linear-gradient(45deg, #ee0979, #ff6a00)",
  };

  const list1 = [
    { name: "A", value: openCount },
    { name: "B", value: 100 - openCount },
  ];

  const list2 = [
    { name: "A", value: closedCount },
    { name: "B", value: 100 - closedCount },
  ];
  const list3 = [
    { name: "A", value: notStartedCount },
    { name: "B", value: 100 - notStartedCount },
  ];
  const list4 = [
    { name: "A", value: blockedCount },
    { name: "B", value: 100 - blockedCount },
  ];
  if(priorityCount){
    var list5 = [
        {name:"A", uv: priorityCount.low},
        {name:"B", uv: priorityCount.med},
        {name:"C", uv: priorityCount.high},
    ]
  }

  return (
    <>
      <div className="home">
        <div className="upsection">
        <div className="topcardwrapper">
          <TopCard
            icon={<Loyalty />}
            number="Total"
            amount={dataProvider && dataProvider.bugs.length}
            colour={divStyle.blue}
          />
          <TopCard
            icon={<ReportProblemOutlined />}
            number="Open"
            amount={openCount}
            colour={divStyle.green}
          />
          <TopCard
            icon={<Done />}
            number="Closed"
            amount={closedCount}
            colour={divStyle.red}
          />
        </div>
        <div className="prioritywrapper">
            <Priority deta= {list5}/>
        </div>
        </div>
        <div className="donutwrapper">
          <Donut deta={list1} val={`${openCount} In progress`} fil="#00C49F" />
          <Donut deta={list2} val="Closed" fil="#f63e51" />
          <Donut deta={list3} val="Not Started" fil="#FF8042" />
          <Donut deta={list4} val="Blocked" fil="#FFBB28" />
        </div>
      </div>
    </>
  );
}
