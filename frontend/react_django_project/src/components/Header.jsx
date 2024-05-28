import { useContext } from 'react'
import { PageContext } from '../App';

const Header = () => {

    const [viewIsTrue, setViewIsTrue] = useContext(PageContext);

  return (
    <div className='h-[10vh] w-full bg-stone-800 text-xl font-bold text-gray-400 flex justify-end items-center px-5 gap-x-5 select-none'>
        <h1 onClick={() => setViewIsTrue(false)} className='hover:text-white transition-hover duration-150 cursor-pointer'>Add Book</h1>
        <h1 onClick={() => setViewIsTrue(true)} className='hover:text-white transition-hover duration-150 cursor-pointer'>View Books</h1>
    </div>
  )
}

export default Header;
