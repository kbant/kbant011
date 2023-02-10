import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, IconButton, MD3Colors, Card as PaperCard, Text, Avatar } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

export interface CardAction {
  name: string;
  action: () => void;
}
export interface CardProps {
  id?: number;
  title: string;
  content?: string;
  contentDone?: boolean;
  image?: string;
  actions?: CardAction[];
  closeAction?: () => void;
  leftIcon?: IconSource;
}

export const Card = ({ title, content, contentDone, image, closeAction, actions, leftIcon }: CardProps) => (
  <PaperCard mode="outlined">
    <PaperCard.Title
      title={title}
      left={leftIcon === undefined ? undefined : () => <Avatar.Icon size={32} icon={leftIcon} />}
      right={
        closeAction === undefined
          ? undefined
          : () => <IconButton icon="close" iconColor={MD3Colors.error50} onPress={closeAction} />
      }
    />
    <PaperCard.Content>
      <Text variant="bodyMedium" numberOfLines={5} style={contentDone && styles.doneText}>
        {content}
      </Text>
    </PaperCard.Content>
    {image && <PaperCard.Cover source={{ uri: image }} resizeMethod="scale"></PaperCard.Cover>}
    {actions && (
      <PaperCard.Actions>
        {actions.map((cardAction, index) => (
          <Button key={index} onPress={cardAction.action}>
            {cardAction.name}
          </Button>
        ))}
      </PaperCard.Actions>
    )}
  </PaperCard>
);

const styles = StyleSheet.create({
  doneText: {
    textDecorationLine: 'line-through',
  },
});
