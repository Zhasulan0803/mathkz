const courses = [
  {
    id: 1,
    title: "Математика толық курс",
    description: "ҰБТ-ға толық дайындық. Алгебра, геометрия, анализ.",
    tag: "ҰБТ дайындық",
    lessons: 24,
    hours: 18,
    price: "12 900 ₸",
    free: false,
    color: "from-blue-900 to-blue-700",
    level: "Орта",
  },
  {
    id: 2,
    title: "Диофант теңдеулері",
    description: "Олимпиада деңгейіндегі диофант теңдеулерін шешу әдістері.",
    tag: "Олимпиада",
    lessons: 16,
    hours: 12,
    price: "Тегін",
    free: true,
    color: "from-green-900 to-green-700",
    level: "Жоғары",
  },
  {
    id: 3,
    title: "Бүтін сандар теориясы",
    description: "Санар теориясының негіздері. Бөлінгіштік, НОД, НОК.",
    tag: "Санар теориясы",
    lessons: 12,
    hours: 9,
    price: "7 900 ₸",
    free: false,
    color: "from-purple-900 to-purple-700",
    level: "Орта",
  },
  {
    id: 4,
    title: "Геометрия: толық курс",
    description: "Планиметрия мен стереометрия. ҰБТ-да жиі кездесетін есептер.",
    tag: "ҰБТ дайындық",
    lessons: 20,
    hours: 15,
    price: "9 900 ₸",
    free: false,
    color: "from-orange-900 to-orange-700",
    level: "Орта",
  },
  {
    id: 5,
    title: "Тригонометрия",
    description: "Тригонометриялық функциялар, теңдеулер және теңсіздіктер.",
    tag: "ҰБТ дайындық",
    lessons: 14,
    hours: 10,
    price: "Тегін",
    free: true,
    color: "from-teal-900 to-teal-700",
    level: "Бастауыш",
  },
  {
    id: 6,
    title: "Олимпиада есептері — 500+",
    description: "500-ден астам олимпиада есебі. Шешімдермен бірге.",
    tag: "Олимпиада",
    lessons: 50,
    hours: 40,
    price: "19 900 ₸",
    free: false,
    color: "from-red-900 to-red-700",
    level: "Жоғары",
  },
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#f4f6f8]">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 px-8 h-14 flex items-center justify-between sticky top-0 z-10">
        <a href="/" className="font-bold text-lg text-green-700">Math<span className="text-gray-800">KZ</span></a>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="/courses" className="text-green-600 font-semibold">Курстар</a>
          <a href="#" className="hover:text-green-600">ҰБТ</a>
          <a href="#" className="hover:text-green-600">Олимпиада</a>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm border border-green-600 text-green-600 rounded-md hover:bg-green-50">Кіру</button>
          <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">Тіркелу</button>
        </div>
      </nav>

      {/* HEADER */}
      <div className="bg-white border-b border-gray-200 px-8 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Барлық курстар</h1>
          <p className="text-gray-500 text-sm">Деңгейіңізге сай курс таңдаңыз — {courses.length} курс қол жетімді</p>

          {/* FILTERS */}
          <div className="flex gap-3 mt-6 flex-wrap">
            {["Барлығы", "ҰБТ дайындық", "Олимпиада", "Санар теориясы", "Тегін"].map((f) => (
              <button
                key={f}
                className="px-4 py-1.5 text-sm rounded-full border border-gray-200 bg-white hover:border-green-500 hover:text-green-600 transition-colors"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* COURSES GRID */}
      <div className="max-w-5xl mx-auto px-8 py-10">
        <div className="grid grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* THUMBNAIL */}
              <div className={`h-36 bg-gradient-to-br ${course.color} flex items-center justify-center relative`}>
                {course.free && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                    ТЕГІН
                  </span>
                )}
                <span className="text-white font-bold text-lg text-center px-4">{course.tag}</span>
              </div>

              {/* BODY */}
              <div className="p-4">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                  {course.tag}
                </div>
                <h3 className="font-bold text-sm mb-2 leading-snug">{course.title}</h3>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{course.description}</p>

                <div className="flex gap-3 text-xs text-gray-400 mb-4">
                  <span>📹 {course.lessons} сабақ</span>
                  <span>⏱ {course.hours} сағат</span>
                  <span>📊 {course.level}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`font-bold ${course.free ? "text-green-600 text-sm" : "text-gray-800"}`}>
                    {course.price}
                  </span>
                  <button className="px-3 py-1.5 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 transition-colors">
                    {course.free ? "Бастау" : "Қосылу"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 