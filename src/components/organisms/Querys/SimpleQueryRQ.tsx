import { FC } from 'react';
import { useQuery } from 'react-query';
import { useStores } from '@/components/shared/providers/RootStoreProvider';
import Preloader from '../../atoms/UI/Preloader';
import { observer } from 'mobx-react-lite';

const SimpleQueryRQ: FC = () => {
  const {
    queryStore: { todos, getTodos }
  } = useStores();

  const { isFetching } = useQuery('getTodos', () => getTodos(), {
    refetchOnWindowFocus: false
    // onSuccess: () => {},
    // onError: () => {}`
  });

  return (
    <Preloader isLoading={isFetching}>
      <>
        {todos?.map((item) => (
          <div key={item.id}>
            <>{item.title}</>
          </div>
        ))}
      </>
    </Preloader>
  );
};

export default observer(SimpleQueryRQ);
