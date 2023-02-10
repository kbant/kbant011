import React, { useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../../components/Button/Button';
import { Separator } from '../../components/Separator';
import { Todo } from '../../recoil/atoms/todos';
import { useTodoActions } from '../../recoil/hooks/useTodoActions';
import { useTodoList } from '../../recoil/hooks/useTodos';

const TodoItem = ({ id, text, done }: Todo) => {
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
    <View>
      <Pressable onPress={onToggle}>
        <Text style={done && styles.doneText}>{text}</Text>
      </Pressable>
      <Button onPress={onRemove} text="Delete" />
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
      ItemSeparatorComponent={() => <Separator />}
      ListFooterComponent={() => <Separator />}
    />
  );
};

const TodoInput = () => {
  const [text, setText] = useState('Test01');
  const { addTodo } = useTodoActions();

  const onAdd = () => {
    if (!text) {
      // TODO toast;
      console.log('Empty Test');
      return;
    }
    console.log('Add');
    addTodo(text);
    setText('Test01');
  };

  return (
    <View>
      <TextInput placeholder="Input Todo" value={text} onChangeText={setText} />
      <Button text="Add" color="green" onPress={onAdd} />
    </View>
  );
};

const TodoApp = () => {
  return (
    <SafeAreaView>
      <TodoList />
      <TodoInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  doneText: {
    textDecorationLine: 'line-through',
  },
});
export default TodoApp;
