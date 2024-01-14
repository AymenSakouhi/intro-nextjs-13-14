const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return { data: [1, 2, 3] }
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return <div>Home page</div>
}
