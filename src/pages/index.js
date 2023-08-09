import * as React from "react";
import Layout from "../layouts";
import "../assets/index.css";
import "../assets/index.styles.css";
import blogDatas from "../datas/blogDatas.js";
const IndexPage = () => {
  console.log(blogDatas);
  return (
    <>
      <Layout>
        <div className="container">
          {blogDatas.map((blog) => {
            return (
              <div class="card">
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
                    <img
                      src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                      alt="user"
                    />
                    <div class="user-info">
                      <h5>July Dec</h5>
                      <small>2h ago</small>
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
