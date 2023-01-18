import "./BlogSection.css";
import BlogEntry from "./BlogEntry";
import ButtonShell from "../ButtonShell";
import { blogsData } from "../../../assets/blogsData";
import React, { useState } from "react";

export default function BlogSection() {
  const [blogs, setBlogs] = React.useState(blogsData);
  const [expanded, setExpanded] = useState(false);

  function toggle(id) {
    setBlogs((prevBlogs) => {
      return prevBlogs
        .map((blog) => {
          return blog.id === id ? { ...blog, on: !blog.on } : blog;
        })
        .sort((a, b) => {
          return a.on < b.on ? 1 : -1;
        });
    });
  }

  // const sortedBlogs = [...blogs].sort((a, b) => {
  //   return a.on < b.on ? 1 : -1;
  // });

  //I made some small changes to 2 : 4 and "View all" : "View less" to make the start state just 2 blogs /MW
  const blogElements = blogs.slice(0, expanded ? 4 : 2).map((blog) => {
    return (
      <BlogEntry
        blog={blog}
        key={blog.id}
        on={blog.on}
        toggle={() => toggle(blog.id)}
      />
    );
  });

  return (
    <>
      <div className="blogSection">
        <div className="blogHeader">
          <div className="sectionTitle">Travel Tips and Advice</div>
          <ButtonShell
            className="allButton"
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            <div className="allButtonText">
              {expanded ? "View less" : "View all"}
            </div>
            <img
              alt="arrow right"
              className="arrow-right"
              src="imgBlog/arrowright.svg"
            />
          </ButtonShell>
        </div>
        <div className="blogCards">{blogElements}</div>
      </div>
    </>
  );
}
