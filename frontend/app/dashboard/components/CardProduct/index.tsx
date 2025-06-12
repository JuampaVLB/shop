import { FC, ReactNode } from "react"
import { Card } from "../Card"

interface CardProductProps {
   onOpenModal: () => void;
}

export const CardProduct: FC<CardProductProps> = ({ onOpenModal }) => {
    return (
        <Card onOpenModal={onOpenModal}>
            <div className="flex gap-5">
                <div className="w-35 h-35 bg-gray-800" />
                <div>
                    <p className="font-bold text-xl">LED Desk Lamp</p>
                    <p className="text-gray-600">Set of 4 elegant ceramic mugs</p>
                    <div className="flex gap-25 mt-10">
                        <div>
                            <label className="text-gray-600">Category</label>
                            <p className="font-medium">Home</p>
                        </div>
                        <div>
                            <label className="text-gray-600">Stock</label>
                            <p className="font-medium">234</p>
                        </div>
                    </div>
                </div>

            </div>

            <p className="text-2xl text-green-500 font-bold">$24.99</p>
        </Card>
    )
}