import { useEffect, useState } from "react"
import { Flex } from "./components/Flex"
import { Grid } from "./components/Grid"

const pages = ["inicio", "app", "flex", "grid"] as const
type Page = (typeof pages)[number]

const links: { page: Exclude<Page, "inicio">; label: string; description: string }[] = [
  { page: "app", label: "App", description: "Página principal de la aplicación" },
  { page: "flex", label: "Flex", description: "Ejemplo de diseño con Flexbox" },
  { page: "grid", label: "Grid", description: "Cuadrícula adaptable a distintos tamaños" },
]

function getPageFromHash(): Page {
  const hash = window.location.hash.slice(1)
  return pages.find((page) => page === hash) ?? "inicio"
}

function App() {
  const [page, setPage] = useState<Page>(getPageFromHash)

  useEffect(() => {
    const updatePage = () => setPage(getPageFromHash())
    window.addEventListener("hashchange", updatePage)
    return () => window.removeEventListener("hashchange", updatePage)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-blue-700 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <a className="text-xl font-bold" href="#inicio">
            Mi proyecto Tailwind
          </a>
          <nav aria-label="Navegación principal" className="flex flex-wrap gap-2">
            {links.map(({ page: linkPage, label }) => (
              <a
                key={linkPage}
                href={`#${linkPage}`}
                aria-current={page === linkPage ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  page === linkPage
                    ? "bg-white text-blue-700"
                    : "text-white hover:bg-blue-600"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        {page === "inicio" && (
          <section aria-labelledby="index-title">
            <h1 id="index-title" className="text-3xl font-bold sm:text-4xl">
              Índice del proyecto
            </h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              Elige una sección para explorar los ejemplos de la aplicación.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {links.map(({ page: linkPage, label, description }) => (
                <a
                  key={linkPage}
                  href={`#${linkPage}`}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <h2 className="text-xl font-semibold text-blue-700">{label}</h2>
                  <p className="mt-2 text-slate-600">{description}</p>
                  <span className="mt-5 inline-block font-medium text-blue-700">
                    Abrir sección <span aria-hidden="true">→</span>
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {page === "app" && (
          <section className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
            <h1 className="text-3xl font-bold sm:text-4xl">Mi aplicación con Tailwind</h1>
            <p className="mt-3 text-slate-600">
              Esta es la página principal de la aplicación. Usa el menú para visitar los ejemplos
              de Flex y Grid.
            </p>
          </section>
        )}

        {page === "flex" && (
          <section aria-labelledby="flex-title">
            <h1 id="flex-title" className="mb-6 text-3xl font-bold">
              Ejemplo de Flex
            </h1>
            <Flex />
          </section>
        )}

        {page === "grid" && (
          <section aria-labelledby="grid-title">
            <h1 id="grid-title" className="mb-4 text-3xl font-bold">
              Ejemplo de Grid
            </h1>
            <p className="mb-4 text-slate-600">
              La cuadrícula cambia de una a tres columnas según el ancho de la pantalla.
            </p>
            <Grid />
          </section>
        )}
      </main>
    </div>
  )
}

export default App