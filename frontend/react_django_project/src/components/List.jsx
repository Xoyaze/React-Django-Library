import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        try{
            const requestData = async() => {
                const response = await axios.get('http://127.0.0.1:8000');
                setBooks(response.data)
                console.log(response.data)
            }
            requestData();
        }catch (error){
            console.log(error)
        }
    }, [])

    return (
    <div className='h-[90%] w-[90%] bg-green-950 rounded-2xl'>
        <ul className='h-full w-full px-3 py-4 flex flex-col gap-y-8 custom-scrollbar'>
            <li className='text-4xl text-yellow-200 w-[90%] flex items-center gap-x-5 mb-5 mt-2'>
                <h1 className='w-[25%] text-center'>Book Name</h1>
                <h1 className='w-[25%] text-center'>Author Name</h1>
                <h1 className='w-[25%] text-center'>Age Restriced</h1>
                <h1 className='w-[12%] text-center'>Pages</h1>
                <h1 className='w-[12%] text-center'>Delete</h1>
            </li>


            {books.map(book => (
                <li className=" w-[90%] flex items-center gap-x-5" key={book.id}>
                    <h1 className='w-[25%] text-center border-r border-white'>{book.name}</h1>
                    <h1 className='w-[25%] text-center border-r border-white'>{book.author_name}</h1>
                    <h1 className='w-[25%] text-center border-r border-white'>{book.age_restricted ? 'Yes' : 'No'}</h1>
                    <h1 className='w-[12%] text-center border-r border-white'>{book.number_of_pages}</h1>
                    <h1 className='w-[12%] text-center text-4xl cursor-pointer text-red-600'>
                        <FontAwesomeIcon icon={faTrash} />
                    </h1>
                </li>
            ))}

        </ul>
    </div>
  )
}

export default List;