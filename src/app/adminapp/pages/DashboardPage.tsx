import "./DashboardPage.css";
const DashboardPage = () => {
  return (
    <main className="dashboard-page">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          height: "5rem",
        }}
      >
        <h1 className="page-title">Dashboard</h1>
      </div>
    </main>
  );
};

export default DashboardPage;
