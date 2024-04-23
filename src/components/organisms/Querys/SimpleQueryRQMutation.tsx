import { FC } from 'react';
import { useMutation } from 'react-query';
import { useStores } from '@/components/shared/providers/RootStoreProvider';
import Preloader from '../../atoms/UI/Preloader';
import { observer } from 'mobx-react-lite';
import AddBtn from '@/components/molecules/Buttons/AddBtn';

const SimpleQueryRQMutation: FC = () => {
  const {
    queryStore: { todos, getTodos }
  } = useStores();

  const { mutate, isLoading } = useMutation({
    mutationKey: 'getTodos',
    mutationFn: async () => getTodos()
  });

  return (
    <>
      <AddBtn text='request' onClick={mutate} />
      <Preloader isLoading={isLoading}>
        <>
          {todos?.map((item) => (
            <div key={item.id}>
              <>{item.title}</>
            </div>
          ))}
        </>
      </Preloader>
    </>
  );
};

export default observer(SimpleQueryRQMutation);
