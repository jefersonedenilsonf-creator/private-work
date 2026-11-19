import { Grid } from "./components/Grid"

function App() {
  return (
    <>
      <h1 className="bg-blue-600 text-white py-4 my-5 text-center text-2xl font-bold">
        My aplicacion con tailwind
      </h1>
      <main className="mx-auto max-w-6xl px-2 sm:px-4">
        <Grid />
      </main>
    </>
  )
}

export default App