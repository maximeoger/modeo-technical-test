import { useQueriesContext } from "../../helpers/state";

const TotalActivities = () => {
  const { monthly : { resultSet, progress, error, isLoading } } = useQueriesContext();

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

  const total = resultSet ? resultSet.chartPivot().reduce((sum, current) => current["datamart_daily_user_activities.activities"] + sum, 0) : '...loading';

  return (
    <div className="font-Poppins font-semibold text-xl mt-2 text-orange-600">{total}</div>
  )
}

export default TotalActivities;