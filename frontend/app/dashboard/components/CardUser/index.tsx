import { FC, ReactNode } from "react"
import { Card } from "../Card"
import { User } from "../../../../types/Auth";

interface CardUserProps {
    onOpenModal: () => void;
    data: User;
}

export const CardUser: FC<CardUserProps> = ({ onOpenModal, data }) => {

    let formatted = "N/A";

    if (data.createdAt?._seconds) {
        const date = new Date(data.createdAt._seconds * 1000);
        formatted = date.toDateString();
    }

    return (
        <Card onOpenModal={onOpenModal}>
            <div className="flex gap-5">
                <div className="w-15 h-15 bg-gray-800 rounded-full flex justify-center items-center">
                    <p className="text-white font-bold text-2xl">{data.fullname[0]}</p>
                </div>
                <div>
                    <p className="font-bold text-xl">{data.fullname}</p>
                    <p className="text-gray-600">{data.email}</p>
                    <div className="flex gap-20 mt-10">
                        <div>
                            <label className="text-gray-600">Role</label>
                            <p className="font-medium">{data.role}</p>
                        </div>
                        <div>
                            <label className="text-gray-600">Joined</label>
                            <p className="font-medium">{formatted}</p>
                        </div>
                    </div>
                </div>

            </div>
        </Card>
    )
}