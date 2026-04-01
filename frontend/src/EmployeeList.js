import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

function EmployeeList() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Dummy employee data
  const employees = [
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "Developer" },
    { id: 2, name: "Jane Smith", email: "jane@gmail.com", role: "Designer" },
    { id: 3, name: "Mike Johnson", email: "mike@gmail.com", role: "Manager" }
  ];

  return (
    <Layout>
      <h2>Employee List 👨‍💼</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td style={styles.td}>{emp.id}</td>
              <td style={styles.td}>{emp.name}</td>
              <td style={styles.td}>{emp.email}</td>
              <td style={styles.td}>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    background: "#fff"
  },
  th: {
    background: "#007bff",
    color: "#fff",
    padding: "10px",
    textAlign:"left"
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd"
  }
};

export default EmployeeList;