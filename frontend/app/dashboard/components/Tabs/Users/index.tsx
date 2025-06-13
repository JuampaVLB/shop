import { useEffect, useState } from "react";
import { tabsHeaderData } from "../../../constans"
import { TabsContainer } from "../../TabsContainer"
import { TabsHeader } from "../../TabsHeader";
import { CardUser } from "../../CardUser";
import { ModalUser } from "../../Modals/ModalUser";
import { getUsers } from "../../../../../api/userApi";
import { toast } from "sonner";
import { User } from "../../../../../types/Auth";
import { FormUser } from "../../../../../types/User";

export const Users = () => {
    const [openModal, setOpenModal] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState("");
    const [selectedUser, setSelectedUser] = useState<any | null>(null);
    const header = tabsHeaderData[1];

    const fetchUsers = async () => {
        try {
            const res = await getUsers();
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching users", error);
            toast.error("Failed to fetch users");
        }
    };

    const filteredUsers = users.filter(user =>
        user.fullname.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <TabsContainer>
            <TabsHeader {...header} onAddProduct={() => setOpenModal(true)} onSearch={setSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[60vh]">
                {filteredUsers.map((data, idx) => (
                    <CardUser key={idx} data={data} onOpenModal={() => {
                        setSelectedUser(data);
                        setOpenModal(true);
                    }} />
                ))}
            </div>

            <ModalUser open={openModal} onOpenChange={setOpenModal} initialData={selectedUser} />
        </TabsContainer>
    )
}