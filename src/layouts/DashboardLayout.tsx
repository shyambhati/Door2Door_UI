import Navbar from '../components/Navbar/Navbar'
import { Sidebar } from '../components/Sidebar/Sidebar'
import SidebarAccordion from '../components/Sidebar/SidebarAccordion'
export default function DashboardLayout() {
  return (
    <>
        <div className="min-h-screen w-full bg-[#e7eaf2]">
            <Navbar />
            <div className="flex  pt-16 h-[calc(100vh)]">
                <SidebarAccordion/>
                <main className="rounded-tl-md flex items-center w-full justify-center h-[calc(100vh-3.5rem)] border-l-1 border-t-1 border-gray-400 bg-[#e7eaf2]">
                    <h1 className="text-4xl font-bold text-blue-600">
                        ✅ Tailwind is Working!
                    </h1>
                </main> 
            </div>
        </div>
    </>
  )
}
