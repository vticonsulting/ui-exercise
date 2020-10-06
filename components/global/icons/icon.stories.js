const Icon = args => <Icon {...args} />

// Each story then reuses that template
export const Primary = Icon.bind({})

Primary.args = {
  primary: true,
  label: 'Button',
}
