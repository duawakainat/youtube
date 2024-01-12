export const metadata = {
  title: 'Home Page',
  description: 'Home more discription',
}
import './globals.css'
import Layout from '@/components/Layout'
import Main from '../components/main'
import Home1 from '@/components/home1'
export default function Home() {
  return (
    <div>
      <Home1/>
      {/* <Main/> */}
      {/* <Layout /> */}
    </div>
    )
}
