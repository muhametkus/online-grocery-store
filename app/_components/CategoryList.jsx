import Image from 'next/image'
import React from 'react'

const CategoryList = ({categoryList}) => {

  return (
    <div className='mt-5'>
        <h2 className='text-green-600 font-bold text-2xl'>Shop by Category</h2>

        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2'>
            {
                categoryList.map((category, index) => (
                    console.log(category),
                    
                    <div className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-200' key={index}>
                        <Image src={process.env.NEXT_PUBLIC_API_URL+category?.icon[0]?.url} width={50} height={50} alt={`${category.name} icon`}
                        className='group-hover:scale-125 transition-all duration-500 ease-in-out'
                        />
                        <h2 className='text-green-800'>{category.name}</h2>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CategoryList