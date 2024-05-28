import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCheck, faChild, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const [isRestricted, setIsRestricted] = useState(false);

    function generateRandomValues() {
        const adjectives = ['Amazing', 'Brilliant', 'Clever', 'Dazzling', 'Epic', 'Fantastic', 'Glorious', 'Heroic', 'Incredible', 'Jubilant'];
        const nouns = ['Adventure', 'Journey', 'Quest', 'Mystery', 'Tale', 'Legend', 'Odyssey', 'Saga', 'Chronicle', 'Excursion'];
        const connectors = ['of', 'in', 'from', 'beyond', 'to', 'under', 'within', 'across', 'through', 'over'];
    
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        const connector = connectors[Math.floor(Math.random() * connectors.length)];
    
    
        const minPages = 50;
        const maxPages = 500;
        
        const firstName = ['John', 'Emma', 'Michael', 'Olivia', 'William', 'Sophia', 'James', 'Isabella', 'Alexander', 'Charlotte'];
        const lastName = ['Smith', 'Johnson', 'Brown', 'Jones', 'Williams', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];
        
        const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
        const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
    
        const randomNum = Math.floor(Math.random() * 2);
        
        
        const pages = Math.floor(Math.random() * (maxPages - minPages + 1)) + minPages;
        const title = `${adjective} ${connector} ${noun}`;
        const authorName = `${randomFirstName} ${randomLastName}`;
        const randomBool = randomNum === 1 ? true : false;
        
        setFormData({
            'name': title,
            'age_restricted': randomBool,
            'number_of_pages': pages,
            'author_name': authorName,
        })
        setIsRestricted(randomBool)

    }
    
  

    const [formData, setFormData] = useState({
        'name': '',
        'age_restricted': false,
        'number_of_pages': '',
        'author_name': '',
    })

    const [isLoading, setIsLoading] = useState(false);

    const handleInputs = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleBookSubmit = async (e) => {
        e.preventDefault();

        if( formData.name.trim() === '' || formData.author_name.trim() === '' || formData.number_of_pages == '' ){
            toast('Please fill all the fields first.', {
                className: 'bg-stone-900',
                bodyClassName: 'bg-stone-900 text-white',
                progressClassName: 'bg-white',
            });
            return;
        }

        setIsLoading(true);
        console.log(formData);

        try{
            const response = await axios.post('http://127.0.0.1:8000', formData);
            console.log(response.data);
            setIsLoading(false)
        }catch(error){
            console.log(error);
        }

        setFormData({
            'name': '',
            'age_restricted': false,
            'number_of_pages': '',
            'author_name': '',
        })
        toast('Added the book to the library.', {
            className: 'bg-green-700',
            bodyClassName: 'bg-green-700 text-white',
            progressClassName: 'bg-stone-900'
        });
    }


    return (
    <div className='h-[90%] w-5/12 bg-green-950 p-2 flex rounded-2xl'>
        <div className='h-full p-2 w-2/3 mt-5'>
            <h1 className='text-4xl text-green-500 mb-8 font-imported'>Details of the book</h1>
            <form onSubmit={handleBookSubmit} className='h-[80%] w-full flex flex-col gap-5'>
                <input value={formData.name} onChange={handleInputs} name='name' className='bg-[rgb(20,20,20)] p-4 rounded-xl w-[90%]' type="text" placeholder='Name of the book'/>
                <input value={formData.number_of_pages} onChange={handleInputs} name='number_of_pages' className='bg-[rgb(20,20,20)] p-4 rounded-xl w-[90%]' type="number" placeholder='No. of pages'/>
                <label  onClick={() => setIsRestricted(!isRestricted)} htmlFor="age_restricted">
                    <div className='bg-[rgb(20,20,20)] p-4 rounded-xl w-[90%]'>{isRestricted ? (
                        <div className='flex gap-2 items-center text-red-500'>
                            <h3>Is Age Restricted</h3>
                            <FontAwesomeIcon icon={faChild} />
                            <FontAwesomeIcon icon={faXmark} />    
                        </div>
                    ) : (
                        <div className='flex gap-2 items-center text-green-500'>
                            <h3>Not Age Restricted</h3>
                            <FontAwesomeIcon icon={faCheck} />    
                        </div>
                    )}</div>
                </label>
                <input value={formData.age_restricted} onChange={handleInputs}  name='age_restricted' id='age_restricted' className='hidden' type="checkbox"/>
                <input value={formData.author_name} onChange={handleInputs} name='author_name' className='bg-[rgb(20,20,20)] p-4 rounded-xl w-[90%]' type="text" placeholder='Author Name'/>
                <button type='submit' className={`bg-[rgb(20,20,20)] p-4 rounded-xl w-[90%] text-gray-300 hover:text-yellow-200 transition-hover duration-150 hover:bg-[rgb(10,10,10)] active:bg-green-700 ${isLoading ? 'pointer-events-none' : ''}`}>
                    {isLoading ? (
                        <div className='h-full w-full flex justify-center items-center gap-x-2'>
                            <h3>Loading...</h3>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                    ) : (
                        <div className='h-full w-full flex justify-center items-center gap-x-2'>
                            <h1>Submit the Book</h1>
                            <FontAwesomeIcon icon={faBook} />
                        </div>
                    )}
                </button>
            </form>
        </div>
        <div className='h-full w-1/3 '>
            <button onClick={generateRandomValues} className='h-full w-full bg-[rgba(10,10,10,0.8)] rounded-2xl text-xl active:bg-black transition-all duration-150 vertical-text flex justify-center items-center hover:text-yellow-200'>Generate Random Details</button>
        </div>
    </div>
  )
}

export default Add;
