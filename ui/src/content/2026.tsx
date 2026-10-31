export default function Taiken_2026() {
  return (
    <section className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-slate-500 tracking-widest mb-2">
        体験！化学実験2026
      </h1>

            <h3 className="font-semibold text-2xl">概要</h3>
            <p className="text-slate-600 mt-1">
              日時：2026年11月1日,3日 12:00-16:30<br /> 
              場所：東京都立大学南大沢キャンパス8号館3階385,386実験室<br />
              参加費無料<br />
              全実験 <strong>整理券制</strong>
            </p>
            <h3 className="font-semibold text-xl mt-3">整理券について</h3>
            <p className="text-slate-600 mt-1">
              全体の開場と同時に先着順で当日分の整理券の配布を行います。整理券をお持ちでないと参加できません。配布場所は8号館3階の受付です。
            </p>
      <h3 className="text-2xl font-bold mt-8 mb-8">一瞬で凍る不思議な水</h3>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <blockquote className="border-l-4 border-slate-300 pl-4 text-xl font-semibold mb-6">
            つつくだけで凍ってしまう、不思議で繊細な水を凍らせてみませんか？

          </blockquote>
          <p className="text-slate-700 leading-relaxed">
            静かに冷やした水は、0度を下回っても凍らない不思議な現象があることを見聞きしたことはあるでしょうか。これを『過冷却』といいます。本実験では、水の代わりに酢酸ナトリウム水溶液を過冷却させて衝撃を加え、全体が一瞬で氷のような固体に変わる様子を目の前でご覧いただけます。ぜひ体験してみてください。
          </p>
        </div>

        <figure className="md:w-2/5 shrink-0">
          <img
            src="/images/overcooling.jpg"
            alt="過冷却水が一瞬で凍る様子"
            className="w-full rounded-lg object-cover"
          />
        </figure>
      </div>
      <h3 className="text-2xl font-bold mt-8 mb-8">魔法の水で絵を書こう！</h3>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <blockquote className="border-l-4 border-slate-300 pl-4 text-xl font-semibold mb-6">
            見えないインクで書いた絵を浮かび上がらせてみませんか？
          </blockquote>
          <p className="text-slate-700 leading-relaxed">
            クエン酸を溶かした水、重曹を溶かした水それぞれで絵を書き、それをアントシアニン色素で浮かび上がらせます。身近なクエン酸と重曹の性質を知ることができます。
          </p>
        </div>

        <figure className="md:w-2/5 shrink-0">
          <img
            src="/images/magic water.jpg"
            alt="インクが浮かび上がった様子"
            className="w-full rounded-lg object-cover"
          />
        </figure>
      </div>
      <></>
        <h3 className="text-2xl font-bold mt-8 mb-8">電池</h3>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <blockquote className="border-l-4 border-slate-300 pl-4 text-xl font-semibold mb-6">
            身近な金属から電池が作れる！？
          </blockquote>
          <p className="text-slate-700 leading-relaxed">
            現在、スマートフォンやキッチンタイマーといったたくさんの電化製品に電池が使われています。この実験では、10円玉に含まれる銅と、5円玉に含まれる亜鉛、そして食塩を使うだけで簡単に電池を作ることができます！
          </p>
        </div>

        <figure className="md:w-2/5 shrink-0">
          <img
            src="/images/battery.png"
            alt="電池の放電の様子"
            className="w-full rounded-lg object-cover"
          />
        </figure>
      </div>
    </section>
  )
}
