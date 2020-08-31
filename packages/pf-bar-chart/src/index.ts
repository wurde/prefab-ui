import { LitElement, svg, customElement, property } from "lit-element";
import * as d3 from "d3";

const margin = { top: 20, right: 0, bottom: 30, left: 40 };

@customElement("pf-bar-chart")
export class PrefabBarChart extends LitElement {
  @property({ type: Number }) width = 150;
  @property({ type: Number }) height = 150;
  @property({ type: String }) color = "steelblue";
  @property({ type: Array }) input = [
    { x: "A", y: 1 },
    { x: "B", y: 2 },
    { x: "C", y: 4 },
    { x: "D", y: 8 },
    { x: "E", y: 16 },
    { x: "F", y: 24 },
  ];

  render() {
    const svgChart = d3
      .create("svg")
      .attr("viewBox", "0 0 100% 100%")
      .attr("width", this.width)
      .attr("height", this.height);

    const plotX = d3
      .scaleBand()
      .domain(this.input.map((d) => d.x))
      .range([margin.left, this.width - margin.right])
      .padding(0.1);

    const plotY = d3
      .scaleLinear()
      .domain([0, d3.max(this.input, (d) => d.y)])
      .nice()
      .range([this.height - margin.bottom, margin.top]);

    svgChart
      .append("g")
      .attr("fill", this.color)
      .selectAll("rect")
      .data(this.input)
      .join("rect")
      .style("mix-blend-mode", "multiply")
      .attr("x", (d) => plotX(d.x))
      .attr("y", (d) => plotY(d.y))
      .attr("height", (d) => plotY(0) - plotY(d.y))
      .attr("width", plotX.bandwidth());

    const xAxis = (g) =>
      g
        .attr("transform", `translate(0,${this.height - margin.bottom})`)
        .call(d3.axisBottom(plotX).tickSizeOuter(0));

    const yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(plotY))
        .call((g) => g.select(".domain").remove());

    svgChart.append("g").call(xAxis);
    svgChart.append("g").call(yAxis);

    return svg`${svgChart.node()}`;
  }
}
