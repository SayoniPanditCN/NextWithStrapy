import Blogs from "./components/Blogs";

const BlogsList = ({ data, data1 }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data1.data.map((x) => {
        return(
            <Blogs data1={x.attributes} id={x}/>
        )
      })}
    </div>
  );
};

export default BlogsList;
