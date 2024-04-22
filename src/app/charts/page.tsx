'use client';
import BarChart from '@/components/atoms/Charts/BarChart';
import CombinedChart from '@/components/atoms/Charts/CombinedChart';
import LineChart from '@/components/atoms/Charts/LineChart';
import PieChart from '@/components/atoms/Charts/PieChart';
import RadarChart from '@/components/atoms/Charts/RadarChart';
import ScatterPlot from '@/components/atoms/Charts/ScatterPlot';
import MainTable from '@/components/organisms/Tables/MainTable';
import { NextPage } from 'next';

const TablePage: NextPage = () => {
  return (
    <>
      <LineChart />
      <BarChart />
      <PieChart />
      <ScatterPlot />
      <RadarChart />
      <CombinedChart />
    </>
  );
};

export default TablePage;
