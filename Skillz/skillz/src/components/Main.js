import React from 'react';
import img1 from '../img/book.jpg';

function Main() {
  return (
    <div className='w-full h-96 border border-gray-100 relative'>
        <img src={book.jpg} alt='' className='h-full w-full object-cover bg-no-repeat bg-bottom'/>
        <div className='absolute bg-white top-12 left-8 p-4 flex flex-column items-start justify-center shadow-lg h-40 w-[440px]'>
           <h2 className='text-3xl font font-bold mb-2'> Welcome to Skillz</h2>
           <h3 className='text-xl'>Check out our courses</h3>
           <h3 className='text-xl'>Learn with some of the best Instructors</h3>
        </div>
    </div>
  );
}

export default Main;