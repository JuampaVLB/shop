import { Package, TrendingUp, User } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Products } from "./components/products"
import { Analytics } from "./components/Analytics"
import { Users } from "./components/users"

export const Dashboard = () => {
    return (
        <>
            <h1 className="text-red-600 text-3xl font-bold">Shopping Dashboard</h1>
            <p className="text-gray-700 font-medium">Comprehensive management system for your business operations
            </p>
            <Tabs defaultValue="signin" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="products"><Package className="h-4 w-4" /> Products</TabsTrigger>
                    <TabsTrigger value="users"><User className="h-4 w-4" /> Users</TabsTrigger>
                    <TabsTrigger value="analytics"><TrendingUp className="h-4 w-4" /> Analytics</TabsTrigger>
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
        </>
    )
}