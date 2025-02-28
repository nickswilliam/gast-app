import React from 'react'

export const SideBarWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <aside className="relative top-0 h-[calc(100vh-54px)] w-80 bg-slate-100 border-r rounded-r-lg rounded-lg shadow-xl p-4 overflow-auto scrollbar-hide -translate-x-[260px] hover:translate-x-0 transition-transform duration-700 after:absolute after:top-[50%] after:right-0 after:w-0 after:h-0 after:border-y-8 after:border-y-transparent after:border-l-8 after:border-l-indigo-500"  >
        {children}
    </aside>
  )
}


//