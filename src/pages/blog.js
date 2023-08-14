import React, { useEffect, useState } from "react";
import Layout from "../layouts";
import "../assets/index.css";
import blogDatas from "../datas/blogDatas.js";
import {
  Container,
  BlogImg,
  BlogTitle,
  BlogContent,
  AuthorContainer,
  AuthorImg,
} from "../assets/blog.styles.js";

const BlogPage = ({ id }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    blogDatas.map((blog) => {
      if (blog.id == id) {
        setBlog(blog);
      } else {
        console.log("id not match");
      }
    });
  });
  return (
    <>
      <Layout>
        {blog ? (
          <Container>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogImg src={blog.image} alt="blog-image" />
            <BlogContent>{blog.content}</BlogContent>
            <AuthorContainer>
              <AuthorImg src={blog.author.image} />
              <div>
                <h5>{blog.author.name}</h5>
                <small>{blog.timeStamp}</small>
              </div>
            </AuthorContainer>
          </Container>
        ) : (
          <></>
        )}
      </Layout>
    </>
  );
};

export default BlogPage;

export const Head = () => <title>Blog Page</title>;
