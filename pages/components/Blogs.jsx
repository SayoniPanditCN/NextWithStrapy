import Link from "next/link";
import styles from "../../styles/Home.module.css"
import BlogsList from "../BlogsList";

const Blogs = ({ data, data1 }) => {

  return (
    // <Link href={`components/${data.id}`}>
    <Link href="#">
      <div className={styles.card}>
        <h2>
          {data1.id}.{data1.Title}
        </h2>
        <p>{data1.Body}</p>
      </div>
    </Link>
  );
};

export default Blogs;
