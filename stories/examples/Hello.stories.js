import { PrefabHello } from "../../packages/pf-hello/src/index";

export default {
  title: "examples/Hello",
};

const Template = (args) => new PrefabHello();

export const Primary = Template.bind({});
