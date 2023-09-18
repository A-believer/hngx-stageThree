import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa"
import { useState } from "react";


export default function Navbar() {
  const [search, setSearch] = useState("")
  return (
    <nav className="flex justify-between mb-10 items-center">
      <Link to={`/`} className="flex sm:text-4xl text-xl items-center italic ">myIG</Link>
      <label htmlFor="search" className="relative border pl-2 py-1.5 rounded-md">
        <input
          value={search}
          onChange={(e) => e.target.value}
          className="bg-transparent text-white w-full h-full placeholder:text-white"
          placeholder="search tags..."
          type="text" name="search"
          id="search" />
        <FaSearch className="absolute right-2 top-3"/>
      </label>
    </nav>
  )
}
