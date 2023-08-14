import * as React from "react";
import Layout from "../layouts";
import "../assets/index.css";
import "../assets/index.styles.css";
import blogDatas from "../datas/blogDatas.js";
import { navigate } from "gatsby";

const IndexPage = () => {
  const handleBlogClicked = (blogID) => {
    navigate(`/blog/${blogID}`);
  };
  return (
    <>
      <Layout>
        <div className="container">
          {blogDatas.map((blog) => {
            return (
              <div class="card" onClick={(e) => handleBlogClicked(blog.id)}>
                <div class="card-header">
                  <img src={blog.image} alt="rover" />
                </div>
                <div class="card-body">
                  {blog.categories.map((category) => {
                    return <span class="tag tag-teal">{category}</span>;
                  })}

                  <h4>{blog.title}</h4>
                  <p>{blog.content.substring(0, 100)}...</p>
                  <div class="user">
                    <img src={blog.author.image} alt="user" />
                    <div class="user-info">
                      <h5>{blog.author.name}</h5>
                      <small>{blog.timeStamp}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
