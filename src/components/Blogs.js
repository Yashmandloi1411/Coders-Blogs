import React, { useContext, useEffect } from "react";

import Spinner from "./Spinner";

import { AppContext } from "../context/AppContext";

const Blogs = () => {
  // consume karo data ko

  const { posts, loading } = useContext(AppContext);
  console.log("printing inside blogs component");

  return (
    <div className="w-11/12 max-w-[450px] py-3 flex flex-col gap-y-2 mt-[60px] mb-[70px]">
      {loading ? (
        <div className="flex justify-center items-center mt-[150px]">
          <Spinner />
        </div>
      ) : posts && posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-xs">{post.title}</p>
            <p>
              By <span className="italic text-sm">{post.author}</span> on{" "}
              <span className="underline">{post.category}</span>
            </p>
            <p className="text-[12px]">Posted on {post.date}</p>
            <p className="text-xs mt-[5px]">{post.context}</p>
            <div className="flex flex-row gap-x-1">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="underline text-blue-600 text-[10px] font-bold"
                >{`#${tag}`}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
