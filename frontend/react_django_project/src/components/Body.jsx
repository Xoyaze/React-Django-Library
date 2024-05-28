import React, { useContext } from 'react';
import { PageContext } from '../App';
import List from './List';
import Add from './Add';

const Body = () => {
    
    const [viewIsTrue] = useContext(PageContext);
    return (
    <div className='h-[90vh] w-full bg-[rgb(20,20,20)] text-white text-xl flex justify-center items-center'>
        {viewIsTrue ? <List /> : <Add />}
    </div>
  )
}

export default Body;
