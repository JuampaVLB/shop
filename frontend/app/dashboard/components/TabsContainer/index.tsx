import { FC } from "react";

interface TabsContainerProps {
    children: React.ReactNode;
}

export const TabsContainer: FC<TabsContainerProps> = ({ children }) => {
    return (
        <div className="md:min-w-[100vh] min-w-0 py-10 min-h-[60vh] bg-white shadow rounded-lg">
            {children}
        </div>
    )
}