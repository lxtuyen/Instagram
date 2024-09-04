import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="">
     <div className="flex gap-4 justify-center items-center">
       <Link className='font-light text-gray-600 hover:underline' to={"/"}>Meta</Link>
       <Link className='font-light text-gray-600 hover:underline' to={"/"}>Giới thiệu</Link>
       <Link className='font-light text-gray-600 hover:underline' to={"/"}>Blog</Link>
       <Link className='font-light text-gray-600 hover:underline' to={"/"}>Việc làm</Link>
       <Link className='font-light text-gray-600 hover:underline' to={"/"}>Trợ giúp</Link>
       <Link className='font-light text-gray-600 hover:underline' to={"/"}>API</Link>
       <Link className='font-light text-gray-600 hover:underline' to={"/"}>Quyền riêng tư</Link>
       <Link className='font-light text-gray-600 hover:underline' to={"/"}>Điều khoản</Link>
       <Link className='font-light text-gray-600 hover:underline' to={"/"}>Vị trí</Link>
       <Link className='font-light text-gray-600 hover:underline' to={"/"}>Threads</Link>
       <Link className='font-light text-gray-600 hover:underline' to={"/"}>Meta đã xác minh</Link>
    </div>
    <div className="flex justify-center items-center mt-5">
        <span className="font-light text-gray-600">© 2024 App from VKU</span>
    </div>
    </footer>
   
  )
}
