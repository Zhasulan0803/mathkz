"use client"
import { useState } from "react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    setError("")
    if (!email || !password) {
      setError("Email және құпиясөз толтырыңыз")
      return
    }
    if (!isLogin && !name) {
      setError("Атыңызды жазыңыз")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert(isLogin ? "Сәтті кірдіңіз!" : "Тіркелу сәтті!")
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-[#f4f6f8] flex flex-col">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 px-8 h-14 flex items-center justify-between">
        <a href="/" className="font-bold text-lg text-green-700">
          Math<span className="text-gray-800">KZ</span>
        </a>
      </nav>

      {/* FORM */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full max-w-md p-8">

          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="text-3xl font-bold text-green-700 mb-1">
              Math<span className="text-gray-800">KZ</span>
            </div>
            <p className="text-gray-400 text-sm">Қазақша математика платформасы</p>
          </div>

          {/* TABS */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => { setIsLogin(true); setError("") }}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
                isLogin ? "bg-white shadow-sm text-gray-800" : "text-gray-400"
              }`}
            >
              Кіру
            </button>
            <button
              onClick={() => { setIsLogin(false); setError("") }}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
                !isLogin ? "bg-white shadow-sm text-gray-800" : "text-gray-400"
              }`}
            >
              Тіркелу
            </button>
          </div>

          {/* ERROR */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-4">
              {error}
            </div>
          )}

          {/* FIELDS */}
          <div className="flex flex-col gap-4">
            {!isLogin && (
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Аты-жөні</label>
                <input
                  type="text"
                  placeholder="Мысалы: Жасұлан Өміртай"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                />
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Құпиясөз</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-sm text-green-600 hover:underline">
                  Құпиясөзді ұмыттыңыз ба?
                </a>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-green-700 transition disabled:opacity-60 mt-2"
            >
              {loading ? "Жүктелуде..." : isLogin ? "Кіру" : "Тіркелу"}
            </button>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">немесе</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* GOOGLE */}
          <button className="w-full border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Google арқылы кіру
          </button>

          {/* SWITCH */}
          <p className="text-center text-sm text-gray-400 mt-6">
            {isLogin ? "Аккаунтыңыз жоқ па? " : "Аккаунтыңыз бар ма? "}
            <button
              onClick={() => { setIsLogin(!isLogin); setError("") }}
              className="text-green-600 font-semibold hover:underline"
            >
              {isLogin ? "Тіркелу" : "Кіру"}
            </button>
          </p>
        </div>
      </div>
    </main>
  )
} 