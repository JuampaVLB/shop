import { useEffect, useState } from "react";
import { getProducts } from "../../../../../api/productApi";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../../../../../components/ui/chart";
import { chartConfig, chartData, kpiData, tabsHeaderData } from "../../../constans"
import { TabsContainer } from "../../TabsContainer"
import { TabsHeader } from "../../TabsHeader";
import { CardInfo } from "./components/CardInfo";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { useProducts } from "../../../../../hooks/useProducts";

export const Analytics = () => {
    const { products } = useProducts();
    const totalProducts = products.length;
    const outOfStockProducts = products.filter(product => product.stock === 0).length;
    const header = tabsHeaderData[2];

    return (
        <TabsContainer>
            <div className="flex flex-col items-center">
                <TabsHeader {...header} />
                <div className="flex flex-col gap-6 sm:flex-row sm:gap-10 w-full">
                    <CardInfo title="Sales" value={kpiData.sales.toString()} colorScheme="blue" />
                    <CardInfo title="Revenue" value={`$${kpiData.revenue}`} colorScheme="green" />
                    <CardInfo title="Products" value={totalProducts} colorScheme="violet" />
                    <CardInfo title="Low Stock" value={outOfStockProducts} colorScheme="orange" />
                </div>
                <div className="w-full mt-20 sm:w-[400px] md:w-[600px] lg:w-[800px]">
                    <ChartContainer config={chartConfig} className="h-[200px] w-full">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
                            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </div>
            </div>
        </TabsContainer>
    )
}