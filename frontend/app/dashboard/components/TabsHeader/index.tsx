import { FC } from "react";
import { Input } from "../../../../components/ui/input";
import { Plus, Search } from "lucide-react";
import { Button } from "../../../../components/ui/button";

interface TabsHeaderProps {
    title: string;
    subtitle: string;
    showSearchBar: boolean;
    searchBarPlaceholder?: string;
}

export const TabsHeader: FC<TabsHeaderProps> = ({
    title, subtitle, showSearchBar, searchBarPlaceholder
}) => {
    return (
        <div className={`flex mb-8 px-8 ${showSearchBar ? "justify-between" : "justify-center"}`}>
            <div>
                <p className={`text-red-600 text-2xl font-bold ${showSearchBar ? "text-left" : "text-center"}`}>{title}</p>
                <p className="text-gray-700">{subtitle}</p>
            </div>
            {
                showSearchBar && (
                    <div className="flex gap-5">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/3 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                            <Input
                                id="signin-password"
                                type="password"
                                placeholder={`Search ${searchBarPlaceholder}...`}
                                // value={form.confirmPassword}
                                // onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                                className="pl-10"
                                required
                            />
                        </div>
                        <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                        >
                            <Plus className="h-4 w-4" />
                            Add Product
                        </Button>
                    </div>
                )
            }

        </div>
    )
}