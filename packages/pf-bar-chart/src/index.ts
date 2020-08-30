import { html } from "lit-html";
import * as d3 from "d3";

export const BarChart = ({data}) => {
  const width = 500;
  const height = 500;
  const margin = { top: 20, right: 0, bottom: 30, left: 40 };

  const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);

  const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top])

  svg.append("g")
      .attr("fill", "steelblue")
    .selectAll("rect")
    .data(data)
    .join("rect")
      .style("mix-blend-mode", "multiply")
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.value))
      .attr("height", d => y(0) - y(d.value))
      .attr("width", x.bandwidth());

  const xAxis = (g) => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0));

  const yAxis = (g) => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call((g) => g.select(".domain").remove());

  const gx = svg.append("g").call(xAxis);
  const gy = svg.append("g").call(yAxis);

  return svg.node();
}
