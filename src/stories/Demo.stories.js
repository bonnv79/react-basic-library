import React from 'react';

import Button from '../components';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      options: ['red', 'blue', 'black'],
      control: { type: 'select' }
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
