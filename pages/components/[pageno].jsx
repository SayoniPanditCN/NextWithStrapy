import Blogs from "./Blogs";
import styles from "../../styles/Home.module.css"

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((data) => {
    return {
      params: {
        pageno: data.id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageno;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
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
        {data.id}.{data.title}
      </h2>
      <p>{data.body}</p>
    </div>
  );
};

export default SignleBlog;
