import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Layout>
      <h2>Dashboard 🚀</h2>
    </Layout>
  );
}

export default Dashboard;