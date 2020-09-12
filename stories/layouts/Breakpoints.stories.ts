import { breakpoints } from "../../packages/pf-layouts/src/index";

export default {
  title: "Layouts/Breakpoints"
}

const Template = (args) => `
  <div>${breakpoints}</div>
`;

export const Primary = Template.bind({});
