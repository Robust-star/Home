import Chart from "../../../Components/Dashboard/chart/Chart"

import FeaturedInfo from "../../../Components/Dashboard/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetSm from "../../../Components/Dashboard/widgetSm/WidgetSm";
import WidgetLg from "../../../Components/Dashboard/widgetLg/WidgetLg";
import Topbar from "../../../Components/Dashboard/topbar/Topbar";
import Sidebar from "../../../Components/Dashboard/sidebar/Sidebar";

export default function Home() {
  return (
    <>
    <Topbar/>
    <div className="container1">

    <Sidebar/>
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
    </div>
    </>
  );
}
