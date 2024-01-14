const DashboardLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <h2>Dashboard layout</h2>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
