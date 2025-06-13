import { FC } from "react";
import { Input } from "../../../../components/ui/input";
import { Plus, Search } from "lucide-react";
import { Button } from "../../../../components/ui/button";

interface TabsHeaderProps {
    title: string;
    subtitle: string;
    showSearchBar: boolean;
    showButton: boolean;
    searchBarPlaceholder?: string;
    onAddProduct?: () => void;
    onSearch?: (value: string) => void;
}

export const TabsHeader: FC<TabsHeaderProps> = ({
    title, subtitle, showSearchBar, searchBarPlaceholder, showButton, onAddProduct, onSearch
}) => {
    return (
        <div className={`flex flex-col md:flex-row mb-8 px-8 ${showSearchBar ? "justify-between" : "justify-center"}`}>
            <div>
                <p className={`text-red-600 text-2xl font-bold ${showSearchBar ? "text-left" : "text-center"}`}>{title}</p>
                <p className="text-gray-700">{subtitle}</p>
            </div>
            {
                showSearchBar && (
                    <div className="flex gap-5 md:mt-0 mt-5 flex-col md:flex-row">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/3 transform -translate-y-0 md:-translate-y-1/2 text-slate-400 h-4 w-4" />
                            <Input
                                id="signin-password"
                                type="text"
                                placeholder={`Search ${searchBarPlaceholder}...`}
                                onChange={(e) => onSearch?.(e.target.value)}
                                // value={form.confirmPassword}
                                className="pl-10"
                                required
                            />
                        </div>
                        {
                            showButton && (
                                <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                                    onClick={onAddProduct}
                                >
                                    <Plus className="h-4 w-4" />
                                    {`Add ${searchBarPlaceholder}`}
                                </Button>
                            )
                        }

                    </div>
                )
            }

        </div>
    )
}