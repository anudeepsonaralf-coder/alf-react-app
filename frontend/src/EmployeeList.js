import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

function EmployeeList() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    fetchEmployees();
  }, [user, navigate]);

  // Dummy employee data

  const fetchEmployees = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/employees");
      const data = await res.json();

      setEmployees(data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  return (
    <Layout>
      <h2>Employee List 👨‍💼</h2>

      <table style={styles.table} className="table table-bordered">
        <thead>
          <tr>
            <th style={styles.th}>SR NO</th>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{emp.id}</td>
              <td style={styles.td}>{emp.emp_name}</td>
              <td style={styles.td}>{emp.email_id}</td>
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