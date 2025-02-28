

export const CardContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg shad bg-slate-100 w-1/2">{children}</div>
  )
}
