
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { Header } from './component/header'
import { Title } from './component/text-style'

function App() {

  return (
    <>
      <main className='m-0 p-0'>
        <Header />
        <div className='flex mt-40'>
          <div className='mx-auto my-auto text-center'>
          <Title>ホームページ作成中...</Title>
          <p>お問い合わせは tmusfc[at]gmail.comか下記SNSまで</p>
          <div className='flex justify-center mt-8 space-x-12 text-4xl'>
            <a href='https://x.com/tmu_sfc' className='text-center space-y-1 p-4 rounded-lg hover:bg-slate-950 hover:text-slate-50 transition-all duration-200'>
              <FaXTwitter className='mx-auto' />
              <p className='text-sm'>@tmu_sfc</p>
            </a>
            <a href='https://www.instagram.com/tmu_sfc/' className='text-center space-y-1 p-4 rounded-lg transition-all duration-200 bg-background hover:text-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'>
              <FaInstagram className='mx-auto' />
              <p className='text-sm'>@tmu_sfc</p>
            </a>
          </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
