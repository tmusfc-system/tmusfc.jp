import { Link } from 'react-router-dom';
export default function Taiken(){
    return(
        <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">体験！化学実験について</h1>
      
          <div className="border-l-2 border-slate-200 pl-6 pb-6">
            <h3 className="font-semibold text-lg">活動内容</h3>
            <p className="text-slate-600 mt-1">東京都立大学の化学好きな学生が運営する「体験!化学実験」は毎年恒例の「光る！弾むスライム」および2年生が思い思いに提案した実験を行っております。今年度のものは
              <Link
                to="/2026"
                className="text-blue-600 underline underline-offset-4 hover:text-blue-800"
                >
                  2026年度特設ページ
              </Link>
              をご覧ください。参加者の皆様には白衣、安全メガネ、ゴム手袋を身に着けていただき科学者になることができます。ぜひ、お越しください！</p>
        </div>
              <h3 className="text-2xl font-bold mt-8 mb-8">光る!弾むスライム</h3>

      
        <div className="flex-1">
          <blockquote className="border-l-4 border-slate-300 pl-4 text-xl font-semibold mb-6">
            弾むだけでなく暗いところで光る、少し変わったスライムを作ってみませんか？

          </blockquote>
          <p className="text-slate-700 leading-relaxed">
            「体験！化学実験」のスライムはあの独特な手触りに加えて，スーパーボールのように弾み，暗闇で光るという不思議な性質を持ち合わせています。
          </p>
        </div>

        <figure className="md:w-2/5 shrink-0">
          <img
            src="/images/slime.jpg"
            alt="スライムの画像"
            className="w-full rounded-lg object-cover"
          />
        </figure>
      </div>
        
        
    )
}