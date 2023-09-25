import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen font-body bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      {/* Hello world */}
      <NavBar/>
    </main>
  )
}
