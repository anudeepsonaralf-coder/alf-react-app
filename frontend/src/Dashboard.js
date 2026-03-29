import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, []);

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div style={styles.container}>
        
        {/* Top Bar */}
        <div style={styles.topbar}>
            <h3>Dashboard</h3>
            <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
            </button>
        </div>

        {/* Content */}
        <div style={styles.content}>
            <h2>Welcome {user?.email}</h2>
            <p>This is your dummy dashboard 🚀</p>
        </div>
        </div>
    );
}

const styles = {
  container: {
    height: "100vh",
    background: "#f4f4f4"
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#007bff",
    color: "#fff"
  },
  logoutBtn: {
    background: "#ff4d4d",
    border: "none",
    padding: "8px 15px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px"
  },
  content: {
    padding: "20px"
  }
};

export default Dashboard;