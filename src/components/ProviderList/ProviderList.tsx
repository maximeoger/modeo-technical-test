import { useCubeQuery } from "@cubejs-client/react";

const ProviderList = () => {
  const { resultSet, isLoading, error, progress } = useCubeQuery({
    "dimensions": [
      "datamart_daily_user_activities.provider"
    ],
    "order": {
      "datamart_daily_user_activities.activities": "desc"
    }
  });

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

  if (!resultSet) {
    return null;
  }

  const data = resultSet.pivot()

  console.log(data)

  return (
   <>
     {
       data.map((data, i) => (
         <p key={i}>{data.xValues[0]}</p>
       ))
     }
   </>
  )
}

export default ProviderList;