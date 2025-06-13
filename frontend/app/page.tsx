"use client";

import { Container } from "../components/ui/Container";
import { useAuth } from "../providers/AuthProvider";
import { Dashboard } from "./dashboard";
import Auth from "./auth/page";

const Home = () => {

  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Auth />;
  }

  return <Container>
    <Dashboard />
  </Container>
}

export default Home;