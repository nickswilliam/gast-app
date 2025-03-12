

export const CardContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="overflow-x-hidden flex flex-col items-center p-4 rounded-xl shadow-md bg-slate-100 w-1/2 relative after:absolute after:w-1/4 after:h-3/4 after:bg-indigo-500 after:top-0 after:rounded-full after:-right-20 before:absolute before:w-1/4 before:h-3/4 before:bg-sky-500 before:bottom-0 before:rounded-full before:-right-10 space-y-4">{children}</div>
  )
}
