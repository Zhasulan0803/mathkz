export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f6f8]">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 px-8 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="font-bold text-lg text-green-700">Math<span className="text-gray-800">KZ</span></div>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-green-600">Курстар</a>
          <a href="#" className="hover:text-green-600">ҰБТ</a>
          <a href="#" className="hover:text-green-600">Олимпиада</a>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm border border-green-600 text-green-600 rounded-md hover:bg-green-50">Кіру</button>
          <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">Тіркелу</button>
        </div>
      </nav>

      {/* HERO */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-8 py-14 flex gap-12 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              🇰🇿 Қазақша математика платформасы
            </div>
            <h1 className="text-3xl font-bold leading-tight mb-3">
              ҰБТ-ға дайындал.<br />Олимпиадада жеңіс қаз.
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
              Бейне сабақтар, интерактивті тесттер және AI-ментор арқылы математиканы тереңірек үйрен.
            </p>
            <div className="flex gap-6 mb-7">
              {[["2 400+", "Оқушы"], ["500+", "Есеп"], ["50+", "Сабақ"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-xl font-bold text-green-700">{n}</div>
                  <div className="text-xs text-gray-400">{l}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700">Тегін бастау</button>
              <button className="px-6 py-3 border border-green-600 text-green-600 rounded-md font-semibold hover:bg-green-50">Курстарды қарау</button>
            </div>
          </div>

          {/* CARD */}
          <div className="w-72 bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
            <div className="h-36 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">∫ π √</div>
                <div className="text-xs text-blue-200 mt-1">ҰБТ Математика</div>
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs font-semibold text-blue-600 uppercase mb-1">ҰБТ дайындық</div>
              <div className="font-bold text-sm mb-2">Математика: Алгебра және анализ</div>
              <div className="text-xs text-gray-400 mb-3">📹 24 сабақ · ⏱ 18 сағат</div>
              <div className="flex items-center justify-between">
                <span className="font-bold">12 900 ₸</span>
                <button className="px-3 py-1.5 bg-green-600 text-white text-xs rounded-md">Қосылу</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COURSES */}
      <div className="max-w-5xl mx-auto px-8 py-10">
        <h2 className="text-xl font-bold mb-1">Барлық курстар</h2>
        <p className="text-sm text-gray-400 mb-6">Деңгейіңізге сай курс таңдаңыз</p>
        <div className="grid grid-cols-3 gap-5">
          {[
            { title: "Математика толық курс", tag: "ҰБТ дайындық", lessons: 24, price: "12 900 ₸", bg: "from-blue-900 to-blue-700" },
            { title: "Диофант теңдеулері", tag: "Олимпиада", lessons: 16, price: "Тегін", bg: "from-green-900 to-green-700" },
            { title: "Бүтін сандар теориясы", tag: "Санар теориясы", lessons: 12, price: "7 900 ₸", bg: "from-purple-900 to-purple-700" },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className={`h-32 bg-gradient-to-br ${c.bg} flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{c.tag}</span>
              </div>
              <div className="p-4">
                <div className="text-xs font-semibold text-blue-600 uppercase mb-1">{c.tag}</div>
                <div className="font-bold text-sm mb-2">{c.title}</div>
                <div className="text-xs text-gray-400 mb-3">📹 {c.lessons} сабақ</div>
                <div className="flex items-center justify-between">
                  <span className={`font-bold ${c.price === "Тегін" ? "text-green-600 text-sm" : ""}`}>{c.price}</span>
                  <button className="px-3 py-1.5 bg-green-600 text-white text-xs rounded-md hover:bg-green-700">Қосылу</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 