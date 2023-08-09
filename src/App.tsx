import ProviderList from "./components/ProviderList/ProviderList";
import TotalActivitiesMonthly from "./components/TotalActivitiesMonthly/TotalActivitiesMonthly";
import ActivitiesPerProvider from "./components/ActivitesPerProvider/ActivitiesPerProvider";
import TotalActivities from "./components/TotalActivities/TotalActivities";
import Card from './components/Card/Card';
import CardTitle from "./components/CardTitle/CardTitle";

function App() {
  return (
    <div className="bg-slate-50 h-screen">

      <div className="flex flex-col justify-center h-28 lg:h-48 bg-slate-950">
        <div className="mx-4 xl:mx-20">
          <span className="text-white font-Poppins text-bold text-4xl">Hello, Ismael 👋</span>
          <div className="text-white text-light mt-4">Track providers activities here, and get a global overview</div>
        </div>
      </div>

      <div className="xl:flex xl:px-12 gap-4">
        { /* Side list */ }
        <div className="p-4 w-72">
          <Card wFull dark>
            <CardTitle>Providers</CardTitle>
            <ProviderList/>
          </Card>
        </div>

        { /* Main Container */ }
        <div className="grow p-2">
          <div className="xl:flex">
            <div className="xl:flex-1 h-96 p-2">
              <Card hFull>
                <CardTitle>Activities monthly</CardTitle>
                <TotalActivitiesMonthly/>
              </Card>
            </div>
            <div className="xl:flex-1 h-96 p-2">
              <Card hFull>
                <CardTitle>Activities per provider</CardTitle>
                <ActivitiesPerProvider />
              </Card>
            </div>

          </div>

          <div className="p-2 max-w-xs">
            <Card>
              <CardTitle>Total activities</CardTitle>
              <TotalActivities/>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
