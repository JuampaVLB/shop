import { Package, TrendingUp, User } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Products } from "./components/Tabs/Products"
import { Analytics } from "./components/Tabs/Analytics"
import { Users } from "./components/Tabs/Users"

export const Dashboard = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center px-4 py-8">
            <div className="flex flex-col gap-4 items-center max-w-4xl w-full text-center">
                <h1 className="text-red-600 text-4xl font-bold">Shopping Dashboard</h1>
                <p className="text-gray-700 font-medium">Comprehensive management system for your business operations
                </p>
            </div>
            <Tabs defaultValue="products" className="space-y-6 mt-15 items-center">
                <TabsList className="flex gap-4 justify-center">
                    <TabsTrigger value="products" className="flex items-center gap-2 px-4 py-2">
                        <Package className="h-4 w-4" /> Products
                    </TabsTrigger>
                    <TabsTrigger value="users" className="flex items-center gap-2 px-4 py-2">
                        <User className="h-4 w-4" /> Users
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="flex items-center gap-2 px-4 py-2">
                        <TrendingUp className="h-4 w-4" /> Analytics
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="products">
                    <Products />
                </TabsContent>

                <TabsContent value="users">
                    <Users />
                </TabsContent>
                <TabsContent value="analytics">
                    <Analytics />
                </TabsContent>
            </Tabs>
        </div>
    )
}
