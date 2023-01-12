import React from "react";

const Blog = ({ blog }) => {
  const { name, description, img, title, date } = blog;
  return (
    <section>
      <div class="card shadow-xl">
        <div class="card-body items-center text-center grid ">
          <div class="card-actions">
            <img
              src={img}
              alt="Shoes"
              class="rounded-xl w-1/4 rounded-full ring ring-accent"
            />
          </div>
          <p className="mt-32 font-bold">{name}</p>
          <p className="mt-20  "> {date}</p>
          <p className="font-bold text-left ">{title}</p>
        </div>
        <figure class="px-8 p-6 -mt-10 ">
          <p>{description}</p>
        </figure>
      </div>
    </section>
  );
};

export default Blog;
