import Sidebar from '@/components/SideBar';
import React from 'react';

interface ILayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain: React.FC<ILayoutMainProps> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <main className='flex-1 overflow-auto bg-[#FCFCFC]'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutMain;
