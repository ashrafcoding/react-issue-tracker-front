import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Doughnut, Bar } from "react-chartjs-2";

import { Loyalty, ReportProblemOutlined, Done } from "@material-ui/icons";
import "./home.css";
import TopCard from "../componenets/TopCard";

const loadBugs = gql`
  query {
    bugs: bugs {
      id
      creator
      priority
      status
    }
    openStatus: bugs(status:"In Progress"){
      status
    }
    closedStatus: bugs(status:"Closed"){
      status
    }
    blockedStatus: bugs(status:"Blocked"){
      status
    }
    lowPriority: bugs(priority:1){
      priority
    }
    medPriority: bugs(priority:2){
      priority
    }
    highPriority: bugs(priority:3){
      priority
    }
    adam: bugs(creator: "Adam"){
      creator
    }
    ellise: bugs(creator: "Ellise"){
      creator
    }
    falak: bugs(creator: "Falak"){
      creator
    }
    inara: bugs(creator: "Inara"){
      creator
    }
    petter: bugs(creator: "Petter"){
      creator
    }
    john: bugs(creator: "John"){
      creator
    }
    julia: bugs(creator: "Julia"){
      creator
    }
  }
`;

export default function Home() {
  const { data } = useQuery(loadBugs);
  const [count, setCount] = useState()
  const [owner, setOwner] = useState()
 
  useEffect(() => {
    if (data) {
      setCount({
        openCount: data.openStatus.length,
        closedCount: data.closedStatus.length,
        blockedCount: data.blockedStatus.length,
        totalCount: data.bugs.length,
        lowPriority: data.lowPriority.length,
        medPriority: data.medPriority.length,
        highPriority: data.highPriority.length
      })
      setOwner({
        adam: data.adam.length,
        john: data.john.length,
        ellise: data.ellise.length,
        petter: data.petter.length,
        inara: data.inara.length,
        falak: data.falak.length,
        julia: data.julia.length,
      })
    }
  }, [data]);
     
  const divStyle = {
    blue: "linear-gradient( 45deg, #6a11cb , #2575fc)",
    green: "linear-gradient(45deg, #00b09b, #96c93d)",
    red: "linear-gradient(45deg, #ee0979, #ff6a00)",
  };

  const sourceGen = (level, prio, col) => {
    return {
      labels: [`${level} priority`, "others"],
      datasets: [
        {
          label: `# of ${level} priority`,
          data: [prio, 100 - prio],
          backgroundColor: [col, "#8884d8"],
          borderWidth: 1,
        },
      ],
    };
  }

  const creatorData = {
    labels: [
      "Adam",
      "Ellise",
      "Falak",
      "Inara",
      "Petter",
      "John",
      "Julia",
    ],
    datasets: [
      {
        label: "# of tickets",
        data: owner && [owner.adam, owner.ellise, owner.falak, owner.inara, owner.petter, owner.john, owner.julia],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(80, 92, 159, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="home">
        <div className="upsection">
          <div className="topcardwrapper">
            <TopCard
              icon={<Loyalty />}
              number="Total"
              amount={count && count.totalCount}
              colour={divStyle.blue}
            />
            <TopCard
              icon={<ReportProblemOutlined />}
              number="Open"
              amount={count && count.openCount}
              colour={divStyle.green}
            />
            <TopCard
              icon={<Done />}
              number="Closed"
              amount={count && count.closedCount}
              colour={divStyle.red}
            />
          </div>
          <div className="prioritywrapper">
            <Doughnut data={sourceGen("low", count &&  count.lowPriority, "#2b71fa")} />
            <Doughnut data={sourceGen("med", count && count.medPriority, "#00C49F")} />
            <Doughnut data={sourceGen("high", count && count.highPriority, "#f63e51")} />
          </div>
        </div>
        <div className="owner">
          <Bar data={creatorData} option={options} />
        </div>
      </div>
    </>
  );
}
