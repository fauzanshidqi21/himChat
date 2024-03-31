import Link from 'next/link'
import React from 'react'

const links = [
    {href:'/chat', label:'chat'},
    {href:'/tours', label:'tours'},
    {href:'/tours/new-tour', label:'new tour'},
    {href:'/summary', label:'summary'},
    {href:'/paraprhase', label:'paraprhase'},
    {href:'/about', label:'about'},
    {href:'/profile', label:'profile'},
]

const NavLinks = () => {
    return (
        <ul className='menu text-base-content'>
            {links.map((link)=>{
                return (
                    <li key={link.href}>
                        <Link href={link.href} className='capitalize'>
                            {link.label}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavLinks
