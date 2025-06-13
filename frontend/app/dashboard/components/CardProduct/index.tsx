import { FC, ReactNode } from "react"
import { Card } from "../Card"
import { FormProduct } from "../../../../types/Product";

interface CardProductProps {
    onOpenModal: () => void;
    onDelete: () => void;
    data: FormProduct
}

export const CardProduct: FC<CardProductProps> = ({ onOpenModal, onDelete, data }) => {
    return (
        <Card onOpenModal={onOpenModal} onDelete={onDelete}>
            <div className="flex gap-5">
                <div className="w-35 h-35 bg-gray-800">
                    <img src={data.image ?? ""} alt={data.name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="font-bold text-xl">{data.name}</p>
                    <p className="text-gray-600">{data.description}</p>
                    <div className="flex gap-25 mt-10">
                        <div>
                            <label className="text-gray-600">Category</label>
                            <p className="font-medium">{data.category}</p>
                        </div>
                        <div>
                            <label className="text-gray-600">Stock</label>
                            <p className="font-medium">{data.stock}</p>
                        </div>
                    </div>
                </div>

            </div>

            <p className="text-2xl text-green-500 font-bold">${data.price}</p>
        </Card>
    )
}