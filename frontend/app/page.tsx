"use client";

import { Container } from "../components/ui/Container";
import { useAuth } from "../providers/AuthProvider";
import Auth from "./auth/page";

const Dashboard = () => {

  const { user, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return <Auth />;
  }

  return <Container>
    <h1 className="text-red-600 text-3xl font-bold">Shopping Dashboard</h1>
    <p className="text-gray-700 font-medium">Access your management system</p>
  </Container>
}

export default Dashboard;