import './App.css'

function App() {
  

  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-white selection:bg-purple-100">
  {/* Subtle Grid Pattern Overlay */}
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
       style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")` }}>
  </div>

  {/* Background Blobs for that 'Image' feel */}
  <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob"></div>
  <div className="absolute top-0 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
  <div className="absolute -bottom-20 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>

  {/* Content starts here */}
  <div className="relative z-10">
    <Navbar />
    {/* Page Content */}
  </div>
</div>
    </>
  )
}

export default App
