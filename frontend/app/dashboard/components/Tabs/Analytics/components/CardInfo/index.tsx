import { FC } from "react";

interface CardInfoProps {
    title: string;
    value: string;
    subtitle?: string;
    colorScheme?: "blue" | "green" | "violet" | "orange";
}

export const CardInfo: FC<CardInfoProps> = ({
    title,
    value,
    subtitle,
    colorScheme = "blue",
}) => {
    const bgColor =
        colorScheme === "blue"
            ? "bg-blue-100"
            : colorScheme === "green"
            ? "bg-green-100"
            : colorScheme === "violet"
            ? "bg-violet-100"
            : "bg-orange-100";

    const textColorTitle =
        colorScheme === "blue"
            ? "text-blue-800"
            : colorScheme === "green"
            ? "text-green-800"
            : colorScheme === "violet"
            ? "text-violet-800"
            : "text-orange-800";

    const textColorValue =
        colorScheme === "blue"
            ? "text-blue-900"
            : colorScheme === "green"
            ? "text-green-900"
            : colorScheme === "violet"
            ? "text-violet-900"
            : "text-orange-900";

    const textColorSubtitle =
        colorScheme === "blue"
            ? "text-blue-600"
            : colorScheme === "green"
            ? "text-green-600"
            : colorScheme === "violet"
            ? "text-violet-600"
            : "text-orange-600";

    return (
        <div
            className={`${bgColor} rounded-lg p-6 w-full sm:max-w-xs mx-auto shadow-md flex flex-col`}
        >
            <div className="flex justify-between items-center mb-2">
                <h3 className={`text-sm font-semibold ${textColorTitle}`}>{title}</h3>
            </div>
            <p className={`text-4xl font-bold ${textColorValue}`}>{value}</p>
            {subtitle && <p className={`text-xs mt-1 ${textColorSubtitle}`}>{subtitle}</p>}
        </div>
    );
};
