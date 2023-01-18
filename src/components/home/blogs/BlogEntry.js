import React from "react";
import "./BlogEntry.css";
import { AiOutlineUser } from "react-icons/ai";
import { SlBubble } from "react-icons/sl";
import { FiCalendar } from "react-icons/fi";

export default function BlogEntry(props) {
  //console.log(props.on);
  // Resolution with derived state, which is not best practice when using State
  /* const [favorite, setFavorite] = React.useState(props.blog.isFavorite);
  function toggle() {
    setFavorite((prevFavorite) => !prevFavorite);
  } */
  let heartIcon = props.blog.on ? "heart-filled.svg" : "heart-empty.svg";

  return (
    <div className="blogCard">
      <img
        src={`${props.blog.img}`}
        alt={`${props.blog.alt}`}
        className="blogImage"
      ></img>
      <div className="blogContent">
        <div>
          <div className="blogEntry--title">{props.blog.title}</div>
          {props.blog.text && (
            <div className="blogEntry--description">{props.blog.text}</div>
          )}
        </div>

        <div className="blogIcons--group">
          <div className="blog-icon-n-text">
            {/* <FiCalendar alt="calendar icon" className="blog-icons" /> */}
            <img
              alt="heart icon"
              className="star-icon"
              src={`imgBlog/${heartIcon}`}
              onClick={props.toggle}
            />
          </div>
          <div className="blog-icon-n-text">
            <FiCalendar alt="calendar icon" className="blog-icons" />

            {props.blog.date}
          </div>
          <div className="blog-icon-n-text">
            <AiOutlineUser alt="person icon" className="blog-icons-user" />

            {props.blog.author}
          </div>
          <div className="blog-icon-n-text">
            <SlBubble alt="bubble icon" className="blog-icons" />

            {props.blog.comments}
          </div>
        </div>
      </div>
    </div>
  );
}
