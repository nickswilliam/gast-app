import React from 'react'

export const SidebarContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full space-y-2 flex flex-col mt-2 h-auto overflow-y-auto scrollbar-hide'>
        {children}
    </div>
  )
}
