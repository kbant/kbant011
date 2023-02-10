import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Appbar, Avatar, Button, Divider, HelperText, TextInput, Provider as PaperProvider } from 'react-native-paper';
import { AnimatedCard } from '../../../components/Paper/AnimatedCard';
import { Todo } from '../../../recoil/atoms/todos';
import { useTodoActions } from '../../../recoil/hooks/useTodoActions';
import { useTodoList } from '../../../recoil/hooks/useTodos';
import { FolderIcon } from '../../../components/Svg/FolderIcon';
import { Card } from '../../../components/Paper/Card';

export const isPortraitOrientation = (): boolean => {
  const { width, height } = useWindowDimensions();
  return height > width;
};

const TodoItem = ({ id, text, done }: Todo) => {
  const marginVertical = isPortraitOrientation() ? 44 : 12;
  const marginHorizontal = isPortraitOrientation() ? 12 : 44;

  const { toggleTodo, removeTodo } = useTodoActions();
  const onToggle = () => {
    toggleTodo(id);
    console.log(`Toggle ${id}`);
  };

  const onRemove = () => {
    removeTodo(id);
    console.log(`Remove ${id}`);
  };

  return (
    // <AnimatedCard
    //   marginHorizontal={marginHorizontal}
    //   card={{
    //     id: id,
    //     title: text,
    //     content: `${text} + (id = ${id})`,
    //     contentDone: done,
    //     closeAction: onRemove,
    //     actions: [{ name: 'Toggle', action: onToggle }],
    //   }}
    // />
    <View style={{ margin: 8 }}>
      <Card
        title={text}
        content={`${text} + (id = ${id})`}
        contentDone={done}
        closeAction={onRemove}
        actions={[{ name: 'Toggle', action: onToggle }]}
      />
    </View>
  );
};

const TodoList = () => {
  const todoList = useTodoList();
  return (
    <FlatList
      data={todoList}
      renderItem={({ item }) => <TodoItem id={item.id} done={item.done} text={item.text} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const TodoInput = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [text, setText] = useState('Test01');
  const { addTodo } = useTodoActions();

  const onAdd = () => {
    if (hasTodoInputError()) {
      return;
    }

    console.log('Add');
    addTodo(text);
    setText('Test01');
  };

  const hasTodoInputError = () => {
    if (text.length < 4) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        placeholder="Typing Task"
        label="Todo Task"
        right={<TextInput.Affix text="/100" />}
        value={text}
        style={{ marginTop: 8 }}
        onChangeText={setText}
      />
      <HelperText type="error" visible={hasTodoInputError()} style={{ marginBottom: 20 }}>
        Todo length less than 4.
      </HelperText>
      <Button mode="contained" onPress={onAdd} style={{ marginBottom: 20 }}>
        Add
      </Button>
    </View>
  );
};

const TodoApp = () => {
  return (
    <SafeAreaView style={styles.root}>
      <TodoList />
      <TodoInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    margin: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
});
export default TodoApp;
