import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Hero, Projects, Skills } from "../components";
import { ISkills, ITabProjects } from "../db/models";

const Home: NextPage = () => {
  const [skills, setSkillData] = useState<ISkills[]>([]);
  const [projects, setProjectData] = useState<ITabProjects[]>([]);

  useEffect(() => {
    fetch("/api/skills")
      .then((response) => response.json())
      .then((json) => {
        setSkillData(json);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Nhlanhla Junior Malaza</title>
        <meta
          name="google-site-verification"
          content="uhCz2o1FOPTi4BlD_3yZ1Nw_ER4VAybFWURc5vBaIVo"
        />
        <link rel="canonical" href="https://njmtech.vercel.app/" />
        <meta property="og:site_name" content="Nhlanhla Junior Malaza" />
        <meta property="og:title" content="Home" />
        <meta name="description" content="Nhlanhla Junior Malaza home page" />
        <meta property="og:url" content="https://njmtech.vercel.app/" />
        <meta itemProp="name" content="Home" />
        <meta itemProp="url" content="https://njm.vercel.app/" />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dfta3fn6p/image/upload/v1676064193/public/favicon_zqeo1n.ico"
        />
      </Head>
      <Hero />
      <Skills data={skills} />
    </>
  );
};

export default Home;
