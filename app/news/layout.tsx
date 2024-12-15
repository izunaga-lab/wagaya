export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="h-20 bg-cyan-700"></div>

      <div className="container mx-auto px-4 -mt-10 mb-4">
        <div className="bg-white shadow-lg rounded-lg text-3xl font-extrabold px-4 py-6">お知らせ</div>
      </div>

      {children}
    </div>
  )
}
