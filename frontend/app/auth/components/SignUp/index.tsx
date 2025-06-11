"use client";

import { Mail, Lock, User, Crown } from "lucide-react"
import { Label } from "../../../../components/ui/label"
import { Input } from "../../../../components/ui/input"
import { Button } from "../../../../components/ui/button"
import { Roles, SignUpForm } from "../../../../types/Auth"
import { handleSignUp } from "../../helpers/handleSignUp"
import { useEffect, useState } from "react"
import { signUpSchema } from "../../../../schemas/authSchemas";
import { mapFirebaseError } from "../../helpers/mapFirebaseError";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { toast } from "sonner";

const initialUser: SignUpForm = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: Roles.CLIENT
}

export const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState<SignUpForm>(initialUser);

    const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const result = signUpSchema.safeParse(form);

        if (!result.success) {
            setError(result.error.errors[0].message);
            setLoading(false);
            return;
        }

        const firebaseResult = await handleSignUp({ form });

        if (!firebaseResult.success) {
            const friendlyError = mapFirebaseError(firebaseResult.message);
            setError(friendlyError);
        }

        toast.success("User created successfully");
        setLoading(false);

    }

    useEffect(() => {
        if (error.length <= 0) return;
        toast.error(error);
    }, [error]);

    return (
        <div className="min-w-100 min-h-105 bg-white border rounded-lg p-5">
            <p className="text-red-600 font-bold text-2xl">Create Account</p>
            <p className="text-gray-700">Sign up for a new account to get started</p>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5 items-center">
                <div className="space-y-2 w-full">
                    <Label htmlFor="signin-email" className="text-red-600">
                        Full Name
                    </Label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                            id="signin-fullname"
                            type="text"
                            placeholder="Enter your full name"
                            value={form.fullname}
                            onChange={(e) => setForm({ ...form, fullname: e.target.value })}
                            className="pl-10"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2 w-full">
                    <Label htmlFor="signin-email" className="text-red-600">
                        Role
                    </Label>
                    <div className="relative flex">
                        <Crown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />

                        <Select onValueChange={(value) => setForm({ ...form, role: value as Roles })} value={form.role}>
                            <SelectTrigger className="w-full pl-9">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="client">Client</SelectItem>
                                <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>



                <div className="space-y-2 w-full">
                    <Label htmlFor="signin-email" className="text-red-600">
                        Email Address
                    </Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                            id="signin-email"
                            type="text"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="pl-10"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2 w-full">
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

                <div className="space-y-2 w-full">
                    <Label htmlFor="signin-email" className="text-red-600">
                        Confirm Password
                    </Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                            id="signin-password"
                            type="password"
                            placeholder="Confirm your password"
                            value={form.confirmPassword}
                            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                            className="pl-10"
                            required
                        />
                    </div>
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                    disabled={loading || !form.role}
                >
                    {loading ? "Creating..." : "Create Account"}
                </Button>

                <p className="text-gray-600 text-xs w-10/12 text-center">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
            </form>
        </div>
    )
}