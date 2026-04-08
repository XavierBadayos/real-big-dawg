import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="min-h-svh">
      <Link to="/players">
          <h1 className="text-xl">Big Mac</h1>
      </Link>
    </div>
  )
}
