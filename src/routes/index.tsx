import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="flex justify-center">
      <img src="/stat-muncher-logo.svg" alt="Stat Muncher Logo" />
    </div>
  )
}
