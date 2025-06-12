import { useState } from "react";
import { tabsHeaderData } from "../../../constans"
import { TabsContainer } from "../../TabsContainer"
import { TabsHeader } from "../../TabsHeader";
import { CardUser } from "../../CardUser";
import { ModalUser } from "../../Modals/ModalUser";

export const Users = () => {
    const [openModal, setOpenModal] = useState(false);
    const header = tabsHeaderData[1];

    return (
        <TabsContainer>
            <TabsHeader {...header} onAddProduct={() => setOpenModal(true)} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-y-scroll max-h-[60vh]">
                {[...Array(9)].map((_, idx) => (
                    <CardUser key={idx} onOpenModal={() => setOpenModal(true)} />
                ))}
            </div>

            <ModalUser open={openModal} onOpenChange={setOpenModal} />
        </TabsContainer>
    )
}