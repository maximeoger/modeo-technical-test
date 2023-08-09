import {useQueriesContext} from "../../helpers/state";

const ProviderList = () => {
  const { providers : { resultSet, isLoading, error, progress } } = useQueriesContext()

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
    <div>
      <ul className="mt-6">
        {
          resultSet && resultSet.pivot().map((dataSet, i) => (
            <li className="font-light mt-1 text-medium" key={`${i}-${dataSet.xValues[0]}`}>
              {dataSet.xValues[0]}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProviderList;