import "../../packages/pf-icons/src/index"

export default {
  title: "Icons/SVG"
}

const Template = (args) => `
  <pf-icon type="close" color="${args.color}" size="${args.size}"></pf-icon>
  <pf-icon type="minus" color="${args.color}" size="${args.size}"></pf-icon>
  <pf-icon type="plus" color="${args.color}" size="${args.size}"></pf-icon>
`;

export const Primary = Template.bind({})

Primary.args = {
  color: "green",
  size: "50px"
}
