import Blogs from "./components/Blogs";

const BlogsList = ({ data, data1 }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data1.data.map((x) => {
        console.log(x.attributes);
        return(
            <Blogs data1={x.attributes} />
        )
      })}
    </div>
  );
};

export default BlogsList;
