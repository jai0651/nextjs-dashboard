'use client';
 
import {
  UserGroupIcon,
  HomeIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'; 
// ...
const links = [
  { id: 1, href: '/home', icon: HomeIcon,name:'home' },
  { id: 2, href: '/user-group', icon:UserGroupIcon,name:'user-group' },
  {id:3,href:'/dashboard/invoices',icon:DocumentIcon,name:'invoices'}
];

 
export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}