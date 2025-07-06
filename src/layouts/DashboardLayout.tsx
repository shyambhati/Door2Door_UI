import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
export default function DashboardLayout() {
  return (
    <>
        <div className="min-h-screen w-full bg-blue-100">
            <Navbar />
            <div className="flex  pt-16 h-[calc(100vh)]">
                <Sidebar/>
                <main className="flex items-center justify-center h-[calc(100vh-3.5rem)]">
                    <h1 className="text-4xl font-bold text-blue-600">
                        ✅ Tailwind is Working!
                    </h1>
                </main> 
            </div>
        </div>
    </>
  )
}
