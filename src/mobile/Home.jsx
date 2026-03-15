import HomeNav from "./components/homeComponents/HomeNav";
import BalanceView from "./components/homeComponents/BalanceView";
import HomeMore from "./components/homeComponents/HomeMore";
import CardList from "./components/homeComponents/CardList";

export default function Home() {
  return (
    <div className="relative bg-white">
      <div className="bg-linear-to-t from-white via-teal-50 to-teal-100">
        <HomeNav />
        <BalanceView />
        <HomeMore />
      </div>

      <CardList />
    </div>
  );
}
