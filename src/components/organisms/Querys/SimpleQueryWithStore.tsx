import { FC } from 'react';
import useSWR from 'swr';
import Preloader from '../../atoms/UI/Preloader';
import { fetcher } from '../../shared/utils/fetcher';
import { Todo } from '../../shared/models/queryStore';

const SimpleQuery: FC = () => {
  const { data, isLoading } = useSWR<Todo[]>('https://jsonplaceholder.typicode.com/todos', (url: string) =>
    fetcher(url, 'GET')
  );

  return (
    <Preloader isLoading={isLoading}>
      <>
        {data?.map((item) => (
          <div key={item.id}>
            <>{item.title}</>
          </div>
        ))}
      </>
    </Preloader>
  );
};

export default SimpleQuery;
