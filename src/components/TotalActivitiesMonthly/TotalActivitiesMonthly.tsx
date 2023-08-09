import ReactECharts, { ReactEChartsProps } from "../ReactECharts/ReactECharts";
import 'echarts/lib/chart/line';
import dayjs from 'dayjs';
import {useQueriesContext} from "../../helpers/state";

const TotalActivitiesMonthly = () => {
  const { monthly : { resultSet, isLoading, progress, error } } = useQueriesContext();

  if (isLoading) {
    return (
      <div>
        {(progress && progress.stage && progress.stage.stage) || "Loading..."}
      </div>
    );
  }

  if (error) {
    return <div>{error.toString()}</div>;
  }

  return (
    <ReactECharts
      loading={isLoading}
      options={{
        xAxis: {
          type: 'category',
          data: resultSet ? resultSet.chartPivot().map(pivot => dayjs(pivot.x).format('MMM YYYY')) : []
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: resultSet ? resultSet.chartPivot().map(pivot => pivot["datamart_daily_user_activities.activities"]) : [],
            color: "#f54d27",
            type: 'line',
            smooth: true
          }
        ]
      } as ReactEChartsProps["options"]}
      theme="ligth"/>
  )
}

export default TotalActivitiesMonthly;