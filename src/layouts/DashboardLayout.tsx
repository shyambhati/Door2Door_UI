
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import { StatCard } from '../components/StatCard/StatCard'
import { ShoppingCart, Users, DollarSign } from "lucide-react";
export default function DashboardLayout() {
  return (
    <>
        <div className="min-h-screen w-full bg-[#e7eaf2]">
            <Navbar />
            <div className="flex  pt-16 h-[calc(100vh)]">
                <Sidebar/>
                <main className="rounded-tl-md  w-full  h-[calc(100vh-3.5rem)]  "
                style={{
                    boxShadow:
                    "inset 8px 0px 10px -8px rgba(0,0,0,0.2), inset 0px 8px 10px -8px rgba(0,0,0,0.2)",
                }}>
                    {/* weekly report */}
                    <div className="grid grid-cols-12  m-2">
                        <div className="col-span-12 md:col-span-8 py-4 pl-4 rounded  
                        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <StatCard title="Total Orders" value="58,375" icon={ShoppingCart} change="-2.89%" isPositive={false} />
                            <StatCard title="Total Visitors" value="12,900" icon={Users} change="+5.2%" />
                            <StatCard title="Total Sales" value="$1.2M" icon={DollarSign} />

                            <StatCard title="Total Orders" value="58,375" icon={ShoppingCart} change="-2.89%" isPositive={false} />
                            <StatCard title="Total Visitors" value="12,900" icon={Users} change="+5.2%" />
                            <StatCard title="Total Sales" value="$1.2M" icon={DollarSign} />
                        </div>

                        <div className="col-span-12 md:col-span-4 p-4 ">
                            <div className="h-full bg-white  rounded flex items-center justify-center">
                                    Will add something here
                            </div>
                        </div>
                    </div>

                   
                    <h1 className="text-4xl font-bold text-blue-600">
                        ✅ Tailwind is Working!
                    </h1>
                </main> 
            </div>
        </div>
    </>
  )
}
