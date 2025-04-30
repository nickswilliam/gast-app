import { CardsWrapper } from "@/components/dashboard/first-card/cards-wrapper"
import { CardsWrapperBottom } from "@/components/dashboard/second-card/cards-wrapper"
import { TextSectionDescription } from "@/components/dashboard/text-section-description"


const DashboardPage = () => {
  return (
    <section className="flex flex-col items-center w-full px-6 py-8 space-y-4">
      <TextSectionDescription title="Ingresos"/>
      <CardsWrapper/>

      <TextSectionDescription title="Gastos"/>
      <CardsWrapperBottom/>
    </section>
  )
}

export default DashboardPage