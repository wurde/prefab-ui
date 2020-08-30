import { html } from "lit-html";
import * as d3 from "d3";

export const BarChart = ({data, width, height}) => {
  const margin = { top: 20, right: 0, bottom: 30, left: 40 };

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, "100%", "100%"])
    .attr("width", width)
    .attr("height", height)

  const plotX = d3.scaleBand()
    .domain(data.map(d => d.x))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const plotY = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.y)]).nice()
    .range([height - margin.bottom, margin.top])

  svg.append("g")
      .attr("fill", "steelblue")
    .selectAll("rect")
    .data(data)
    .join("rect")
      .style("mix-blend-mode", "multiply")
      .attr("x", d => plotX(d.x))
      .attr("y", d => plotY(d.y))
      .attr("height", d => plotY(0) - plotY(d.y))
      .attr("width", plotX.bandwidth());

  const xAxis = (g) => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(plotX).tickSizeOuter(0));

  const yAxis = (g) => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(plotY))
    .call((g) => g.select(".domain").remove());

  const gx = svg.append("g").call(xAxis);
  const gy = svg.append("g").call(yAxis);

  return svg.node();
}
