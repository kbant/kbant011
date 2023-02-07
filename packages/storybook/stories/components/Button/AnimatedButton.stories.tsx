import React from 'react';
import { AnimatedButton } from '@kbant/app/src/components/Animated/AnimatedButton';
import { ComponentMeta, ComponentStory, ComponentStoryObj } from '@storybook/react';
import CenterView from '../CenterView';

export default {
  title: 'components/AnimatedButton',
  component: AnimatedButton,
} as ComponentMeta<typeof AnimatedButton>;

export const Basic: ComponentStory<typeof AnimatedButton> = args => (
  <CenterView>
    <AnimatedButton text="Hello World" color="blue" textColor="white" />
  </CenterView>
);
