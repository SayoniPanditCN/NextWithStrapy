import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BlogsList from "./BlogsList";
import Blogs from "./components/Blogs";

export default function Home({ data, data1 }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BlogsList data={data} data1={data1}/>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const res1 = await fetch("http://localhost:1337/api/blogs");
  const data1 = await res1.json();

  return {
    props: {
      data,
      data1
    },
  };
};
