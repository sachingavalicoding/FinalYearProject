

const Navbar = () => {
  return (
    <header className="w-full h-[4rem] mx-auto container border-slate-950 shadow-lg grid grid-cols-2 items-center justify-between sm: grid-cols-3 ">
      <h3 className="text-bold text-salte-900 text-center text-3xl font-extrabold"> NIKE </h3>
      <nav className=" hidden sm:flex items-center justify-between border-red-700">
        <a href="."> Home </a>
        <a href="."> About </a>
        <a href="."> Products </a>
        <a href="."> Tesitimonials </a>
        <a href="."> Contact  </a>
      </nav>
      <div className="flex items-center justify-center gap-3 ">
        <span> S </span>
        <span> S </span>
      </div>
    </header>
  )
}

export default Navbar