import React from 'react';
import { Button } from '@kbant/app';
import { ComponentMeta, ComponentStory, ComponentStoryObj } from '@storybook/react';
import CenterView from '../CenterView';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => (
  <CenterView>
    <Button text="Hello World" color="blue" textColor="white" />
  </CenterView>
);

export const VectorIcons: ComponentStory<typeof Button> = args => (
  <CenterView>
    <Icon.Button name="facebook" backgroundColor="green">
      <Text>Login with Facebook</Text>
    </Icon.Button>
  </CenterView>
);
