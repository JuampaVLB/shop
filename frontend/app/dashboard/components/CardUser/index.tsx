import { FC, ReactNode } from "react"
import { Card } from "../Card"

interface CardUserProps {
    onOpenModal: () => void;
}

export const CardUser: FC<CardUserProps> = ({ onOpenModal }) => {
    return (
        <Card onOpenModal={onOpenModal}>
            <div className="flex gap-5">
                <div className="w-15 h-15 bg-gray-800 rounded-full" />
                <div>
                    <p className="font-bold text-xl">JuampaVLB</p>
                    <p className="text-gray-600">contact.juampavlb@gmail.com</p>
                    <div className="flex gap-20 mt-10">
                        <div>
                            <label className="text-gray-600">Role</label>
                            <p className="font-medium">Admin</p>
                        </div>
                        <div>
                            <label className="text-gray-600">Joined</label>
                            <p className="font-medium">2024-01-20</p>
                        </div>
                    </div>
                </div>

            </div>
        </Card>
    )
}