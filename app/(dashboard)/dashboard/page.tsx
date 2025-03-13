import { CardsWrapper } from "@/components/dashboard/first-card/cards-wrapper"


const DashboardPage = () => {
  return (
    <section className="flex flex-col items-center w-full px-6 py-8 space-y-4">
      <h2 className="self-start font-semibold text-slate-600 text-lg">Ingresos</h2>
      <CardsWrapper/>
    </section>
  )
}

export default DashboardPage