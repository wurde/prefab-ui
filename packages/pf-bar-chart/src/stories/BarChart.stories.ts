import { BarChart } from '../index';

export default {
  title: 'Example/BarChart'
};

const Template = (args) => BarChart(args);

export const Primary = Template.bind({});
Primary.args = {
  data: [
    { name: 'A', value: 1 },
    { name: 'B', value: 2 },
    { name: 'C', value: 4 },
    { name: 'D', value: 8 },
    { name: 'E', value: 16 },
  ]
}
