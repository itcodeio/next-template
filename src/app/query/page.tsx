'use client';
import MultiTabs from '@/components/atoms/UI/MultiTabs';
import SimpleQuery from '@/components/organisms/Querys/SimpleQuery';
import SimpleQueryRQ from '@/components/organisms/Querys/SimpleQueryRQ';
import SimpleQueryRQMutation from '@/components/organisms/Querys/SimpleQueryRQMutation';
import SimpleQueryWithStore from '@/components/organisms/Querys/SimpleQueryWithStore';
import { NextPage } from 'next';

const tabs = [
  {
    title: 'SWR',
    content: <SimpleQuery />
  },
  {
    title: 'SWR with store',
    content: <SimpleQueryWithStore />
  },
  {
    title: 'react-query with store',
    content: <SimpleQueryRQ />
  },
  {
    title: 'react-query mutation',
    content: <SimpleQueryRQMutation />
  }
];

const TablePage: NextPage = () => {
  return (
    <>
      <MultiTabs tabs={tabs} />
    </>
  );
};

export default TablePage;
