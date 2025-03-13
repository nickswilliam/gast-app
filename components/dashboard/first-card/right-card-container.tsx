

export const RightCardContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="z-10 overflow-x-hidden flex flex-col items-center p-4 rounded-xl shadow-md bg-slate-100 w-full lg:w-1/2 h-44 relative after:absolute after:w-1/4 after:h-3/4 after:bg-slate-700 after:top-2 after:rounded-full after:-left-12 before:absolute before:w-1/4 before:h-3/4 before:bg-slate-300 before:bottom-4 before:rounded-full before:-left-16 before:z-0 after:z-0 space-y-4">{children}</div>
  )
}
