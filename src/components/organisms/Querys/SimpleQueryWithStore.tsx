'use client';
import { FC, useEffect } from 'react';
import useSWR from 'swr';
import Preloader from '../../atoms/UI/Preloader';
import { Todo } from '../../shared/models/queryStore';
import { useStores } from '@/components/shared/models/RootStoreProvider';
import { observer } from 'mobx-react-lite';
import { fetcher } from '@/components/shared/utils/fetcher';

const SimpleQueryWithStore: FC = () => {
  const {
    queryStore: { todos, setTodos }
  } = useStores();

  const { data, error, isLoading } = useSWR<Todo[]>(
    'https://jsonplaceholder.typicode.com/todos',
    (url: string) => fetcher(url, 'GET')
  );

  useEffect(() => {
    data && setTodos(data);
  }, [data, error]);

  return (
    <Preloader isLoading={isLoading}>
      <>
        {todos.map((item) => (
          <div key={item.id}>
            <>{item.title}</>
          </div>
        ))}
      </>
    </Preloader>
  );
};

export default observer(SimpleQueryWithStore);
