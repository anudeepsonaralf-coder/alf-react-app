import { useNavigate, Link } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={styles.wrapper}>
      
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3>ALF IOT</h3>
        <ul style={styles.menu}>
          <li style={styles.menuList}><Link to="/employees">Employees</Link></li>
          <li style={styles.menuList}>Profile</li>
          <li style={styles.menuList}>Settings</li>
        </ul>
      </div>

      {/* Main Section */}
      <div style={styles.main}>
        
        {/* Header */}
        <div style={styles.header}>
          <h3>Welcome {user?.email}</h3>
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        </div>

        {/* Page Content */}
        <div style={styles.content}>
          {children}
        </div>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    height: "100vh"
  },
  sidebar: {
    width: "200px",
    background: "#222",
    color: "#fff",
    padding: "20px"
  },
  menu: {
    listStyle: "none",
    padding: 20,
  },
  main: {
    flex: 1,
    background: "#f4f4f4"
  },
  header: {
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
  },

  menuList: {
    marginBottom:"10px",
  }

};

export default Layout;