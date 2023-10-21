"use client";
import LeftSide from '@/components/LeftSide'
import NavBar from '@/components/NavBar'
import RightSide from '@/components/RightSide'
import { motion } from 'framer-motion'
import Introduction from '@/components/Introduction';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="w-full h-screen font-body bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <NavBar />
      <div className='w-full h-[88vh] xl:flex items-center gap-10 justify-between'>
        <motion.div
          initial={{ x: -12, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 1.2
          }}
          className='hidden xl:inline-flex w-36 h-full fixed left-8 bottom-64'>
          <LeftSide />
        </motion.div>
        <div className='h-[88vh] gap-8 mx-auto p-10 pl-10'>
          <Introduction />
          <About />
        </div>
        <motion.div initial={{ x: 12, opacity: 0 }}
          className='hidden xl:inline-flex w-36 h-full fixed right-6 bottom-64'
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 1.2
          }}>
          <RightSide />
        </motion.div>
      </div>
    </main>
  )
}
