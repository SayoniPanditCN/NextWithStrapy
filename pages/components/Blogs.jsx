import Link from "next/link";
import styles from "../../styles/Home.module.css"
import BlogsList from "../BlogsList";

const Blogs = ({ data1, id }) => {

    console.log(id.id);

  return (
    <Link href={`components/${id.id}`}>
    
      <div className={styles.card}>
        <h2>
          {id.id}.{data1.Title}
        </h2>
        <p>{data1.Body}</p>
      </div>
    </Link>
  );
};

export default Blogs;
