"use client"

import { Mail, Lock } from "lucide-react"
import { Label } from "../../../../components/ui/label"
import { Input } from "../../../../components/ui/input"
import { Button } from "../../../../components/ui/button"
import { useEffect, useState } from "react"
import { SignInForm } from "../../../../types/Auth"
import { handleSignIn } from "../../helpers/handleSignIn"
import { signInSchema } from "../../../../schemas/authSchemas"
import { mapFirebaseError } from "../../helpers/mapFirebaseError"
import { toast } from "sonner"

const initialUser: SignInForm = {
    email: "",
    password: "",
}

export const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState<SignInForm>(initialUser);

    const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const result = signInSchema.safeParse(form);

        if (!result.success) {
            setError(result.error.errors[0].message);
            setLoading(false);
            return;
        }

        const firebaseResult = await handleSignIn({ form });

        if (!firebaseResult.success) {
            const friendlyError = mapFirebaseError(firebaseResult.message);
            setError(friendlyError);
        }

        setLoading(false);

    }

    useEffect(() => {
        if (error.length <= 0) return;
        toast.error(error);
    }, [error]);

    return (
        <div className="min-w-100 min-h-105 bg-white border rounded-lg p-5">
            <p className="text-red-600 font-bold text-2xl">Welcome</p>
            <p className="text-gray-700">Sign in to your account to continue</p>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
                <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-red-600">
                        Email Address
                    </Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                            id="signin-email"
                            type="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="pl-10"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-red-600">
                        Password
                    </Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                            id="signin-password"
                            type="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            className="pl-10"
                            required
                        />
                    </div>
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                    disabled={loading}
                >
                    {loading ? "Signing In..." : "Sign In"}
                </Button>
                <div className="w-full bg-gray-100 p-3 rounded-lg">
                    <p className="text-gray-800 font-medium text-[14px]">Demo Accounts:</p>
                    <div className="flex flex-col gap-1 mt-2">
                        <p className="text-xs"><span className="text-gray-700 font-bold">Admin:</span> admin@example.com / admin123</p>
                        <p className="text-xs"><span className="text-gray-700 font-bold">Client:</span> client@example.com / password123</p>
                    </div>
                </div>
            </form>
        </div>
    )
}