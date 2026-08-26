import {Link} from 'react-router-dom';
export default function About(){
    return(
        <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">活動概要</h1>
      
        <div className="space-y-8">
          <div className="border-l-2 border-slate-200 pl-6 pb-6">
            <h3 className="font-semibold text-lg">活動目的</h3>
            <p className="text-slate-600 mt-1">TMU-SFCは、東京都立大学の学生で構成された、主に小学生向けの化学実験教室の企画・運営を行っている団体です。私たちは化学の面白さをより多くの人たちに伝えることを目的に活動しています。</p>
            </div>
          <div className="border-l-2 border-slate-200 pl-6 pb-6">
            <h3 className="font-semibold text-lg">活動内容</h3>
            <p className="text-slate-600 mt-1">現在行っている活動は大きく分けて、近隣の小学校や科学館などへの「出張実験」と、大学祭期間中の「体験！化学実験」です。子ども達に大人気なスライム作り、人工いくら作りなど、様々な化学実験を行っています。詳しくはページ上部の「出張実験」「体験!化学実験」(近日公開)からご覧ください。</p>
        </div>
        </div>
         </div>
    )
}