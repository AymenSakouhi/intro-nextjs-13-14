const IDPage: React.FC<{
  params: {
    id: string
  }
}> = ({ params }) => {
  console.log(params)
  return <div>Hello there from docs</div>
}

export default IDPage
