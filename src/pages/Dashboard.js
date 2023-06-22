const Dashboard = ({ user }) => {
  return (
    <section className='section text-center fs-4 mb-5 fw-bold'>
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
