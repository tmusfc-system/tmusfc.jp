export default function Example() {
    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-2">出張実験の例</h1>
            <p className="text-slate-600 mt-1">実際に出張実験で行う実験の例を以下にご紹介します。</p>
            
            {/* flexを外し、space-y-8で要素間の縦間隔を一括制御 */}
            <div className="space-y-8 mt-8">
                {/* 個別の実験項目 */}
                <div className="border-l-2 border-slate-200 pl-6">
                    <h3 className="font-semibold text-lg">入浴剤づくり</h3>
                    <p className="text-slate-600 mt-2">
                         キッチンにある身近な材料を用いて、お湯に入れるとシュワシュワとした泡とアロマオイルの香りが広がるオリジナルの入浴剤が作れます。<br />
                        【試薬】重曹, クエン酸, デンプン<br />
                        【時間】20分
                    </p>
                </div>

                <div className="border-l-2 border-slate-200 pl-6">
                    <h3 className="font-semibold text-lg">人工イクラづくり</h3>
                    <p className="text-slate-600 mt-2">
                         塩化カルシウム水溶液に、海藻類のぬめりのもとであるアルギン酸ナトリウムの水溶液を滴下することで、粒々としたイクラの様なものが出来ます。これがマイクロカプセルです。<br />
                        【試薬】アルギン酸ナトリウム水溶液, 塩化カルシウム水溶液, インク<br />
                        【時間】15分
                    </p>
                </div>
                                <div className="border-l-2 border-slate-200 pl-6">
                    <h3 className="font-semibold text-lg">ミラクルフラワー</h3>
                    <p className="text-slate-600 mt-2">
                         酸性ではピンク色に、アルカリ性では青色を呈色する紫キャベツや紫イモの色素を染み込ませた半紙で花を作ります。クエン酸溶液や重曹を吹きかけることで、花をピンクと青色に変えることができます。<br />
                        【試薬】紫イモ色素,炭酸水素ナトリウム（重曹）水溶液,クエン酸水溶液<br />
                        【時間】20分
                    </p>
                </div>
                
                {/* 他の項目も同様に div で囲むだけで縦に綺麗に並びます */}
            </div>
        </div>
    )
}
