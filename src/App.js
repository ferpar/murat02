import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { select } from "d3";

const initialData = [25, 45, 30, 74, 38];

function App() {
  const [data, setData] = useState(initialData)
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", value => value)
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2)
      .attr("stroke", "red")
;
  }, [data]);
  return <React.Fragment>
    <svg ref={svgRef}></svg>
    <br/>
    <button onClick={() => setData(data.map( val => val + 5))}>Update Data</button>
    <button onClick={() => setData(data.filter( value => value  < 50))}> Filter Data</button>
    </React.Fragment>;
}

export default App;
