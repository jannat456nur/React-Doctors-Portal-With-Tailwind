import React from 'react';
import pic1 from '../../../images/people-1.png'
import pic2 from '../../../images/people-2.png'
import Blog from './Blog';

const Blogs = () => {
    const blogData =[
        {
            id:1,
            name:'Dr.Caudi',
            title:"The tooth cancer is takinga challenge",
            img :pic1,
            bgClass :'bg-accent',
            date:'23 April 2019',
            description:'with great features. Dummy Text Generator for Web'
        },
        {
            id:2,
            name:'Dr. John',
            title:"2 times of brush in a day can keep you healthy",
            img :pic2,
            bgClass :'bg-info',
            date:'03 April 2020',
            description:' generator with great features. Dummy Text Generator for Web'
        },
           {
            id:3,
            name:'Dr. John',
            title:"2 times of brush in a day can keep you healthy",
            img :pic2,
            bgClass :'bg-info',
            date:'03 April 2020',
            description:' generator with great features. Dummy Text Generator for Web'
        },
        
    ]
    return (
        <>
        <section className='pt-10  '>
        <div className='text-center'>
            <h4 className='text-accent font-bold '>Our Blog</h4>
            <h1 className='text-3xl font-bold '>From Our Blog News</h1>
        </div>
   
            
{/*        
        <div>
           <div class="card w-96 bg-base-100 shadow-xl image-full">
               <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
           <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
           <div class="card-actions justify-end">
             <button class="btn btn-primary">Buy Now</button>
           </div>
         </div>
        </div>    
                   
        </div> */}
         <div className='grid mt-20  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grow h-14'>
             
             {
                 blogData.map(blog=><Blog
                 key={blog.id}
                 blog={blog}
                 >
                 </Blog>)
             }
         </div>
        
         </section>
         </>
    );
};

export default Blogs;