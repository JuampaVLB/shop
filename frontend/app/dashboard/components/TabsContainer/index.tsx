import { FC } from "react";

interface TabsContainerProps {
    children: React.ReactNode;
}

export const TabsContainer: FC<TabsContainerProps> = ({ children }) => {
    return (
        <div className="w-full min-w-[130vh] py-10 min-h-[60vh] bg-white shadow rounded-lg">
            {children}
        </div>
    )
}