'use client';
import MultiTabs from '@/components/atoms/UI/MultiTabs';
import SimpleQuery from '@/components/organisms/Querys/SimpleQuery';
import SimpleQueryWithStore from '@/components/organisms/Querys/SimpleQueryWithStore';
import { NextPage } from 'next';

const tabs = [
  {
    title: 'Tab 1',
    content: <SimpleQuery />
  },
  {
    title: 'Tab 2',
    content: <SimpleQueryWithStore />
  }
];

const TablePage: NextPage = () => {
  return (
    <>
      {/* <SimpleQuery />
       */}
      <MultiTabs tabs={tabs} />
    </>
  );
};

export default TablePage;
