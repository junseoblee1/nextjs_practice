import type { GetStaticProps, NextPage } from 'next'
import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import homeStyles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/post";
import Link from "next/link";

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Junseob Lee</title>
      </Head>
      <section className={homeStyles.headingmd}>
        <p>[Junseob Lee Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingmd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} legacyBehavior>
                <a>{title}</a>
              </Link>
              <br />
              <small className={homeStyles.lightText}>
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}
