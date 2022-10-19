import Blogs from "./Blogs";
import styles from "../../styles/Home.module.css"

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/api/blogs");
  const data = await res.json();

  const paths = data.data.map((info) => {
    return {
      params: {
        pageno: info.id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
// console.log(getStaticPaths());

export const getStaticProps = async (context) => {
  const id = context.params.pageno;

  const res = await fetch(`http://localhost:1337/api/blogs/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};



const SignleBlog = ({ data }) => {
 
  return (
    <div className={styles.card}>
      <h2>
        {data.data.id}.{data.data.attributes.Title}
      </h2>
      <p>{data.data.attributes.Body}</p>
    </div>
  );
};

export default SignleBlog;
