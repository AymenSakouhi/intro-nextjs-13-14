const layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <h2>Marketing layout</h2>
      <div>{children}</div>
    </div>
  )
}

export default layout
