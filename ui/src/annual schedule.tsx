// src/History.tsx

export default function Annual() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">年間の活動計画</h1>
      
      <div className="space-y-8">
        <div className="flex gap-4">
          <div className="font-mono font-bold text-lg text-primary w-20 shrink-0">
            4月
          </div>
          <div className="border-l-2 border-slate-200 pl-6 pb-6">
            <h3 className="font-semibold text-lg">入部期間</h3>
            <p className="text-slate-600 mt-1">中央新歓や部室開放で当サークルの説明や簡単な実験を通してTMU-SFCについて知ってもらいます。</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="font-mono font-bold text-lg text-primary w-20 shrink-0">
            5月
          </div>
          <div className="border-l-2 border-slate-200 pl-6 pb-6">
            <h3 className="font-semibold text-lg">確定新歓</h3>
            <p className="text-slate-600 mt-1">BBQやパーティーなどの行事を通じて上級生と新入部員が交流、親睦を深めます。</p>
          </div>
        </div>        <div className="flex gap-4">
          <div className="font-mono font-bold text-lg text-primary w-20 shrink-0">
            6月
          </div>
          <div className="border-l-2 border-slate-200 pl-6 pb-6">
            <h3 className="font-semibold text-lg">予備実験</h3>
            <p className="text-slate-600 mt-1">10月の大学祭の提案実験の初回の予備実験を行い、実験の具体的なイメージを掴みます。また、7月の出張実験に向けての予備実験も行い、初めて参加する人もイメージを持つことができます。</p>
          </div>
        </div>
      </div>
    </div>
  );
}