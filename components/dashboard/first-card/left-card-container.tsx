

export const LeftCardContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="z-10 overflow-x-hidden flex flex-col items-center p-4 rounded-xl shadow-md bg-slate-100 w-full lg:w-1/2 h-44 relative after:absolute after:w-1/4 after:h-3/4 after:bg-indigo-300 after:top-4 after:rounded-full after:-right-20 before:absolute before:w-1/4 before:h-3/4 before:bg-indigo-700 before:bottom-2 before:rounded-full before:-right-10 space-y-4">{children}</div>
  )
}
