import Header from './components/header'
import HomeSection1 from './components/home/Section1'
import HomeSection2 from './components/home/Section2'
import { Toolbar } from '@mui/material'

export default function Home() {
  return (
    <div className="home-cover bg-homepage">
      <Header />
      <Toolbar className="min-h-[100px]" />
      <HomeSection1 />
      <HomeSection2 />
    </div>
  )
}
