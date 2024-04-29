'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 

const PATH_NAME = [
    {pathname: '/',label: 'Home'}, 
    {pathname: '/work',label: 'Work'}, 
    {pathname: '/blog',label: 'Blog'}, 
    {pathname: '/contact',label: 'Contact'}, 
]

export default function NavLink() {
  const pathname = usePathname()
 
  return (
    <>
        {PATH_NAME.map((item) =>
        <div key={item.label}>
            <Link  className={`link ${pathname === item.pathname ? 'active' : ''}`} href={item.pathname}>
                {item.label}
            </Link>
        </div>    
        )}
    </>
  )
}