import ReactECharts, { ReactEChartsProps } from "../ReactECharts/ReactECharts";
import 'echarts/lib/chart/line';
import {useQueriesContext} from "../../helpers/state";

const ActivitiesPerProvider = () => {
  const { activitiesPerProviders : { resultSet, isLoading, progress, error } } = useQueriesContext();

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
          data: resultSet ? resultSet.chartPivot().map(pivot => pivot.x) : []
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            color: "#f54d27",
            data: resultSet ? resultSet.chartPivot().map(pivot => pivot['datamart_daily_user_activities.activities']) : []
          },
        ]
      } as ReactEChartsProps["options"]}
      theme="ligth"/>
  )
}

export default ActivitiesPerProvider;