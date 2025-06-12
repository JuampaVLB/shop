import { useState } from "react";
import { tabsHeaderData } from "../../../constans"
import { CardProduct } from "../../CardProduct";
import { TabsContainer } from "../../TabsContainer"
import { TabsHeader } from "../../TabsHeader"
import { ModalProduct } from "../../Modals/ModalProduct";

export const Products = () => {
    const [openModal, setOpenModal] = useState(false);
    const header = tabsHeaderData[0];

    return (
        <TabsContainer>
            <TabsHeader {...header} onAddProduct={() => setOpenModal(true)} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-y-scroll max-h-[60vh]">
                {[...Array(9)].map((_, idx) => (
                    <CardProduct key={idx} onOpenModal={() => setOpenModal(true)} />
                ))}
            </div>

            <ModalProduct open={openModal} onOpenChange={setOpenModal} />
        </TabsContainer>
    )
}