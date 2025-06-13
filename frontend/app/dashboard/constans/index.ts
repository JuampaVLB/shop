export const tabsHeaderData = [{
    title: "Product Catalog",
    subtitle: "Manage your product inventory and details",
    showSearchBar: true,
    showButton: true,
    searchBarPlaceholder: "products"
},
{
    title: "User Management",
    subtitle: "Manage user accounts and permissions",
    showSearchBar: true,
    showButton: false,
    searchBarPlaceholder: "users"
},
{
    title: "Business Analytics",
    subtitle: "Comprehensive insights into your business performance",
    showSearchBar: false,
    showButton: false,
}]

export const kpiData = {
    sales: 750,
    revenue: 32000,
    products: 125,
    users: 350,
};

export const chartData = [
    { month: "January", sales: 920, revenue: 5000 },
    { month: "February", sales: 2050, revenue: 6200 },
    { month: "March", sales: 3295, revenue: 7000 },
    { month: "April", sales: 1439, revenue: 4500 },
    { month: "May", sales: 8000, revenue: 5500 },
    { month: "June", sales: 5023, revenue: 2800 },
];

export const chartConfig = {
    sales: {
        label: "Sales",
        color: "#2563eb",
    },
    revenue: {
        label: "Revenue",
        color: "#60a5fa",
    },
};