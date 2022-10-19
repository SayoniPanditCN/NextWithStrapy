import Blogs from "./components/Blogs";

const BlogsList = ({ data, data1 }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data1.data.map((x, index) => {
        return(
            <Blogs key={index} data1={x.attributes} id={x}/>
        )
      })}
    </div>
  );
};

export default BlogsList;
