import React from 'react';
import BigMatch from '../../components/Winners/BigMatch/BigMatch';
import BigMatchDatas from  './BigMatch';
import DailyDatas from './Daily';
import Daily from "../../components/Winners/Daily/Daily";
import Weekly from "../../components/Winners/Weekly/Weekly";
import WeeklyDatas from "./Weekly";

const WinnersPage = () => {
  return (
    <div>
      <BigMatch BigMatchDatas={BigMatchDatas} />
      <Daily DailyDatas={DailyDatas} />
      <Weekly WeeklyDatas={WeeklyDatas} />
    </div>
  );
}

export default WinnersPage