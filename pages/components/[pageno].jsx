import Blogs from "./Blogs";
import styles from "../../styles/Home.module.css"

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/api/blogs");
  const data = await res.json();

  // const paths = Object.keys(data).map((data) => {
  //   console.log(data.id);
  //   return {
  //     params: {
  //       // pageno: data.id.toString(),
  //     },
  //   };
  // });

  return {
    paths: ["3"],
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const id = context.params.pageno;

//   const res = await fetch(`http://localhost:1337/api/blogs/${id}`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

const SignleBlog = ({ data }) => {
  return (
    <div className={styles.card}>
      <h2>
        {/* {data.id}.{data.title} */}
      </h2>
      {/* <p>{data.body}</p> */}
    </div>
  );
};

export default SignleBlog;
