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
                         塩化カルシウム水溶液に、海藻類のぬめりのもとであるアルギン酸ナトリウムの水溶液を滴下することで、粒々としたイクラの様なものが出来ます。これが人工イクラです。(当サークルにてお作りしている人工イクラは食用ではありません。予めご了承ください。)<br />
                        【試薬】アルギン酸ナトリウム水溶液, 塩化カルシウム水溶液, インク<br />
                        【時間】15分
                    </p>
                </div>
                <div className="border-l-2 border-slate-200 pl-6">
                    <h3 className="font-semibold text-lg">尿素の結晶</h3>
                    <p className="text-slate-600 mt-2">
                        尿素の結晶をつくって、成長を観察する実験です。様々な形のモールに尿素の溶液を染み込ませて、乾燥させることで、結晶をつくることができます。<br />
                        【試薬】尿素<br />
                        【時間】20分
                    </p>
                </div>
                <div className="border-l-2 border-slate-200 pl-6">
                    <h3 className="font-semibold text-lg">冷えるカイロ</h3>
                    <p className="text-slate-600 mt-2">
                        水の入った袋を潰すだけでひんやり冷たくなるようなカイロを作ります。尿素と硝酸アンモニウムが水に溶解することによって周囲の熱を奪い、ひんやり冷たく感じます。<br />
                        【試薬】尿素, 硝酸アンモニウム<br />
                        【時間】15分
                    </p>
                </div>
                                <div className="border-l-2 border-slate-200 pl-6">
                    <h3 className="font-semibold text-lg">スライム作り</h3>
                    <p className="text-slate-600 mt-2">
                        スライム作りは簡単で面白く、子供たちに大人気の実験です。<br />
                        スライムは、水とポリビニルアルコール(洗濯のり)とホウ砂を混ぜて作ります。<br />
                        出張実験では、ゴムボールの様に弾ませて遊べる「はずむスライム」や、膨らませて遊べる「風船スライム」などの実験を行っております。<br />
                    </p>
                </div>
                {/* 他の項目も同様に div で囲むだけで縦に綺麗に並びます */}
            </div>
        </div>
    )
}
