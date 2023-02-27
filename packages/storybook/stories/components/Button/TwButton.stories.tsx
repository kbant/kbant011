import React from 'react';
import { Button } from '@kbant/app/src/components/Button/TwButton';
import { ComponentMeta, ComponentStory, ComponentStoryObj } from '@storybook/react';
import CenterView from '../CenterView';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default {
  title: 'components/TwButton',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => (
  <CenterView>
    <Button text="Hello World" color="red" textColor="white" />
  </CenterView>
);
