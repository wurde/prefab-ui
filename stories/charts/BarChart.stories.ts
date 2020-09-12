import "../../packages/pf-bar-chart/src/index";

export default {
  title: "Charts/BarChart",
};

const Template = (args) => `
  <pf-bar-chart
    width="${args.width}"
    height="${args.height}"
    color="${args.color}"
    info=${JSON.stringify(args.info)}
    />
`;

export const Primary = Template.bind({});

Primary.args = {
  width: 250,
  height: 250,
  color: "green",
  info: [
    { x: "A", y: 1 },
    { x: "B", y: 2 },
    { x: "C", y: 4 },
    { x: "D", y: 8 },
    { x: "E", y: 16 },
    { x: "F", y: 32 },
  ],
};
