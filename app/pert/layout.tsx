import React from 'react'

const layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <h1>PERT CHildren</h1>
      <div>{children}</div>
    </div>
  )
}

export default layout
