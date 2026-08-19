
import { Title } from './components/text-style'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PiFlaskBold } from 'react-icons/pi'
import { SNS } from './components/SNS'

export default function HomePage() {
    return (
            <>
      <main className='m-0 p-0'>
        <div className='flex mt-12 mx-6'>
          <div className='mx-auto my-auto text-center'>
            <Title>より多くの人に　化学の面白さを</Title>
            <p>東京都立大学の子供向け実験サークル</p>
            <p>ホームページ鋭意作成中です。</p>
            <SNS />{/*別ファイルに切り出したSNSリンクデザインを呼び出した*/}
          </div>
        </div>
        <div className='mt-6 mx-6'>
          <Alert variant={"default"} className='flex mx-auto max-w-120 items-center justify-between'>
            <div className="flex items-center space-x-3">
              <PiFlaskBold className="!text-primary !w-8 !h-8 flex-none" />
              <div className="">
                <AlertTitle className='font-bold text-xl'>お問い合わせ先</AlertTitle>
                <AlertDescription>出張実験の依頼など興味があればお気軽に　tmusfc[at]gmail.comか上記SNSまでご連絡ください。([at]は@に置き換えてください。)</AlertDescription>
              </div>
            </div>
          </Alert>
        </div>
      <footer className="text-xs text-slate-500 text-center mt-4">
        <aside>
          <p>Copyright © 2026 TMU-SFC - All right reserved.</p>
        </aside>
      </footer>
      </main>
    </>
    )
}