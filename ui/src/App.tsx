
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { Header } from './components/header'
import { Title } from './components/text-style'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PiFlaskBold } from 'react-icons/pi'

function App() {

  return (
    <>
      <main className='m-0 p-0'>
        <Header />
        <div className='flex mt-12 mx-6'>
          <div className='mx-auto my-auto text-center'>
            <Title>ホームページ作成中...</Title>
            <p>お問い合わせは tmusfc[at]gmail.comか下記SNSまで</p>
            <div className='flex justify-center mt-8 space-x-8 text-4xl'>
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
        <div className='mt-6 mx-6'>
          <Alert variant={"default"} className='flex mx-auto max-w-120 items-center justify-between'>
            <div className="flex items-center space-x-3">
              <PiFlaskBold className="!text-primary !w-8 !h-8 flex-none" />
              <div className="">
                <AlertTitle className='font-bold text-xl'>TMU-SFCとは？</AlertTitle>
                <AlertDescription>「より多くの人たちに化学の面白さを」をモットーに活動する、東京都立大学の科学実験サークルです。出張実験の依頼など興味があればお気軽にご連絡ください。</AlertDescription>
              </div>
            </div>
          </Alert>
        </div>
      <footer className="text-xs text-slate-500 text-center mt-4">
        <aside>
          <p>Copyright © 2025 TMU-SFC - All right reserved.</p>
        </aside>
      </footer>
      </main>
    </>
  )
}

export default App
