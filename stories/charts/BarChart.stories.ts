import { PrefabBarChart } from "../../packages/pf-bar-chart/src/index";

export default {
  title: "Charts/BarChart",
};

interface PlotPoints {
  width: number;
  height: number;
  color: string;
  data: Array<{ x: string; y: number }>;
}

const Template = (args: PlotPoints) => new PrefabBarChart(args);

export const Primary = Template.bind({});
Primary.args = {
  width: 150,
  height: 150,
  color: "green",
  data: [
    { x: "A", y: 1 },
    { x: "B", y: 2 },
    { x: "C", y: 4 },
    { x: "D", y: 8 },
    { x: "E", y: 16 },
    { x: "F", y: 32 },
  ],
};
