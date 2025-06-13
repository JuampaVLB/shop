import { SquarePen, Trash2 } from "lucide-react";
import { FC } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../../../components/ui/alert-dialog";

interface CardProps {
    children: React.ReactNode;
    onOpenModal: () => void;
    onDelete: () => void;
}

export const Card: FC<CardProps> = ({ children, onOpenModal, onDelete }) => {
    return (
        <div className="w-full aspect-[3/2] bg-white border-2 rounded-lg p-4 flex flex-col justify-between">
            {children}

            <div className="border-t-1 pt-2 flex justify-end gap-3">
                <button className="border-1 pl-5 pr-5 pt-2 pb-2 rounded-lg cursor-pointer transition duration-200 ease-in-out hover:bg-slate-100" onClick={onOpenModal}>
                    <SquarePen className="text-slate-900 h-4 w-4" />
                </button>
                <AlertDialog>
                    <AlertDialogTrigger> <button className="border-1 pl-5 pr-5 pt-2 pb-2 rounded-lg cursor-pointer transition duration-200 ease-in-out hover:bg-slate-100"
                    >
                        <Trash2 className="text-slate-900 h-4 w-4" />
                    </button></AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete it.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={onDelete}>Confirm</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </div>
        </div>
    )
}