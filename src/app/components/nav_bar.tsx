
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import NavBarButton from './nav_bar_button';



const Navbar = () => {
    const router = useRouter();
    const currentPath = usePathname();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <div className='flex justify-between h-[88px] px-[12px] items-center py-[26px] overflow-y-scroll no-scrollbar'>
            <Image
                src="/aique-icon.png"
                alt="AIQUE Icon"
                width={32}
                height={32}
                priority
            />
            <div className='flex gap-[12px] pl-[53px]' >
                <NavBarButton text='Home' selected={currentPath == '/'} onClick={() => navigateTo('/')} />
                <NavBarButton text='About' selected={currentPath == '/about'} onClick={() => navigateTo('/about')} />
                <NavBarButton text='Contacts' selected={currentPath == '/contacts'} onClick={() => navigateTo('/contacts')} />

            </div>
        </div>
    );

};

export default Navbar;
