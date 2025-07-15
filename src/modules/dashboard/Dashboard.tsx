import { ProductTable } from "../products/ProductTable";
import { StatCard } from "../../components/StatCard/StatCard";
import { ShoppingCart, Users, DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div
          className="col-span-12 md:col-span-8  rounded grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <StatCard
            title="Total Orders"
            value="58,375"
            icon={ShoppingCart}
            change="-2.89%"
            isPositive={false}
          />
          <StatCard
            title="Total Visitors"
            value="12,900"
            icon={Users}
            change="+5.2%"
          />
          <StatCard title="Total Sales" value="$1.2M" icon={DollarSign} />

          <StatCard
            title="Total Orders"
            value="58,375"
            icon={ShoppingCart}
            change="-2.89%"
            isPositive={false}
          />
          <StatCard
            title="Total Visitors"
            value="12,900"
            icon={Users}
            change="+5.2%"
          />
          <StatCard title="Total Sales" value="$1.2M" icon={DollarSign} />
        </div>

        <div className="col-span-12 md:col-span-4 pl-4">
          <div className="h-full bg-white  rounded flex items-center justify-center">
            Will add something here
          </div>
        </div>
      </div>


      <ProductTable />

  </>
  );
};

export default Dashboard;
