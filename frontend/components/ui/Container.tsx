import { FC } from "react"

interface ContainerProps {
    children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({
    children
}) => {
    return <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100">
        {children}
    </div>
}