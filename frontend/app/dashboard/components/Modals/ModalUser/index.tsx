import { Crown, Mail, User } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../../../components/ui/dialog"
import { Label } from "../../../../../components/ui/label";
import { Input } from "../../../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../../components/ui/select";
import { Button } from "../../../../../components/ui/button";
import { useEffect, useState } from "react";
import { FormUser } from "../../../../../types/User";
import { Roles } from "../../../../../types/Auth";

interface ModalUserProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: FormUser;
}

export const ModalUser = ({ open, initialData, onOpenChange }: ModalUserProps) => {

    const [form, setForm] = useState<FormUser | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form) return;

        console.log(form);
    }

    useEffect(() => {
        if (open) {
            setForm(initialData ?? {
                fullname: "",
                role: Roles.CLIENT,
                email: "",
            });
        }
    }, [open, initialData]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl text-red-600">Edit user</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="space-y-2 w-full mt-5">
                        <Label htmlFor="fullname" className="text-red-600">
                            Fullname
                        </Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter full name"
                                value={form?.fullname}
                                onChange={(e) => setForm(prev => prev ? { ...prev, fullname: e.target.value } : null)}
                                className="pl-10"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2 w-full">
                        <Label htmlFor="email" className="text-red-600">
                            Email
                        </Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                            <Input
                                id="description"
                                type="email"
                                placeholder="Enter email"
                                value={form?.email}
                                onChange={(e) => setForm(prev => prev ? { ...prev, email: e.target.value } : null)}
                                className="pl-10"
                                required
                            />
                        </div>



                    </div>

                    <div className="space-y-2 w-full">
                        <Label htmlFor="role" className="text-red-600">
                            Role
                        </Label>
                        <div className="relative flex">
                            <Crown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />

                            <Select
                                value={form?.role ?? Roles.CLIENT}
                                onValueChange={(value) => setForm(prev => prev ? { ...prev, role: value as Roles } : null)}
                            >
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

                    <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                        disabled={!form?.fullname || !form.email || !form.role}
                    >
                        Confirm
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};