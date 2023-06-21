import React from "react";
import Project from "../components/Project";
import Swal from 'sweetalert2';
import Head from "next/head";

const Portfolio = (props) => {

  const privateAlert = () => {
    Swal.fire({
      icon: 'info',
      title: 'Content Not Available',
      text: 'Due to request, this GitHub repository is private. You may view the deployed application by using the preview button.',
    })
  }

  return (
    <>
      <Head>
        <title> Portfolio | Kaileb Hammontree | Full-Stack Developer</title>
        <meta name="description" content="Explore Kaileb Hammontree's Project Portfolio. Discover what projects he has worked on and find out what Hammontree Full-Stack Solutions can do for you!" />
        <meta name="keywords" content="Portfolio, Web Development, Full-Stack Development, Kaileb Hammontree" />
        <link rel="canonical" href="https://www.kailebhammontree.com/portfolio" />
      </Head>
      <main className='portfolio-body'>
        {/* BroFit Personal Training */}
        <Project src={"/img/brofit.webp"} deployment={'https://www.reesewilder.com/'} click={privateAlert} alt={'screenshot of BroFit Personal Training website'} appTitle={'BroFit Personal Training'} content={'HTML | BootStrap | CSS | JavaScript'} />
        {/* Outta-Touch */}
        <Project src={"/img/outta-touch.webp"} deployment={'https://outta-touch.herokuapp.com/'} repository={'https://github.com/argounova/outta-touch'} alt={'screenshot of outta touch application'} appTitle={'OUTTA TOUCH'} content={'MERN stack | Apollo | Websocket/GraphQL subscriptions'} />
        {/* MTG ++ App */}
        <Project src={"/img/mtgpp.webp"} deployment={'https://peaceful-escarpment-11973.herokuapp.com/'} repository={'https://github.com/HammontreeWebDev/MTGpp'} alt={'screenshot of MGT++ deck building application'} appTitle={'MTG++'} content={'Node.js | Express.js | MySQL | JavaScript | jQuery | Handlebars | Bootstrap | CSS'} />
        {/* PokéWire App */}
        <Project src={"/img/pokewire.webp"} deployment={'https://luckysal.github.io/pokewire/index.html'} repository={'https://github.com/LuckySal/pokewire'} alt={'screenshot of PokéWire application'} appTitle={'PokéWire'} content={'HTML5 | JavaScript | jQuery | Bulma | CSS | API'} />
      </main>
    </>
  )
}

export default Portfolio;