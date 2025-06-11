import { Container } from "../../components/ui/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

const Auth = () => {
    return (
        <Container>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5 items-center">
                    <div className="bg-red-500 w-20 h-20 rounded-full"></div>
                    <h1 className="text-red-600 text-3xl font-bold">Shopping Dashboard</h1>
                    <p className="text-gray-700 font-medium">Access your management system</p>
                </div>

                <Tabs defaultValue="signin" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="signin">
                        <SignIn />
                    </TabsContent>

                    <TabsContent value="signup">
                        <SignUp />
                    </TabsContent>
                </Tabs>
            </div>
        </Container>
    )
}

export default Auth;