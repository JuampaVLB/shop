import { SquarePen, Trash2 } from "lucide-react";
import { FC } from "react";

interface CardProps {
    children: React.ReactNode;
    onOpenModal: () => void;
}

export const Card: FC<CardProps> = ({ children, onOpenModal }) => {
    return (
        <div className="w-full aspect-[3/2] bg-white border-2 rounded-lg p-4 flex flex-col justify-between">
            {children}

            <div className="border-t-1 pt-2 flex justify-end gap-3">
                <button className="border-1 pl-5 pr-5 pt-2 pb-2 rounded-lg cursor-pointer transition duration-200 ease-in-out hover:bg-slate-100" onClick={onOpenModal}>
                    <SquarePen className="text-slate-900 h-4 w-4" />
                </button>
                <button className="border-1 pl-5 pr-5 pt-2 pb-2 rounded-lg cursor-pointer transition duration-200 ease-in-out hover:bg-slate-100">
                    <Trash2 className="text-slate-900 h-4 w-4" />
                </button>
            </div>
        </div>
    )
}