import * as React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from 'react-query';
import { getArticles } from '../../../apis/articleApi';
import { Button } from '@app/components/Button/Button';

export function ArticlesScreen() {
  const { data, isLoading } = useQuery('articles', getArticles);
  console.log(data, isLoading);
  return (
    <View>
      <Text>Articles</Text>
      <Button text="Show Item" />
    </View>
  );
}

export default ArticlesScreen;
