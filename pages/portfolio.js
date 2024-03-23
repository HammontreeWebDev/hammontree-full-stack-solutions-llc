import React, { lazy, Suspense, useEffect, useRef } from "react";
import Project from "../components/Project";
import Swal from 'sweetalert2';
import Head from "next/head";
import useMediaQuery from "../utils/useMediaQuery";

const Portfolio = (props) => {

  const isSmallScreen = useMediaQuery('(max-width: 768px)');

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

        {/* J-Boo Customs Website / Jesse Ryder Brown Foundation, Inc.*/}
        <Project src={"/img/jboo-mockup.webp"} deployment={'https://www.j-boocustoms.org/'} repository={'https://github.com/HammontreeWebDev/j-boo-customs-nextJS'} alt={'screenshot of J-Boo Customs Website'} appTitle={'Jesse Ryder Brown Foundation, Inc'} content={'ReactJS | NextJS | Node.js | Custom CSS'} photo_icon={ isSmallScreen ? 'img/motocross.webp' : 'img/motocross-mobile.webp'} lowResPhoto={'img/motocross-low-res.webp'} />

        {/* motocross.webp Photo by cottonbro studio: https://www.pexels.com/photo/rider-checking-his-dirt-bike-5803326/ */}

        {/* BroFit Personal Training */}
        <Project src={"/img/Brofit.webp"} deployment={'https://www.reesewilder.com/'} click={privateAlert} alt={'screenshot of BroFit Personal Training website'} appTitle={'BroFit Personal Training'} content={'HTML | BootStrap | CSS | JavaScript'} photo_icon={ isSmallScreen ? 'img/gym.webp' : 'img/gym-mobile.webp'} lowResPhoto={'img/gym-low-res.webp'}/>

        {/* gym.webp Photo by Leon Ardho: https://www.pexels.com/photo/barbell-on-the-floor-1552252/ */}

        {/* Outta-Touch */}
        <Project src={"/img/OuttaTouch.webp"} deployment={'https://outta-touch.herokuapp.com/'} repository={'https://github.com/argounova/outta-touch'} alt={'screenshot of outta touch application'} appTitle={'OUTTA TOUCH'} content={'MERN stack | Apollo | Websocket/GraphQL subscriptions'} photo_icon={ isSmallScreen ? 'img/lonely.webp' : 'img/lonely-mobile.webp'} lowResPhoto={'img/lonely-low-res.webp'}/>

        {/* lonely.webp Photo by mikoto.raw Photographer : https://www.pexels.com/photo/photo-of-woman-using-mobile-phone-3367850/ */}


        {/* MTG ++ App */}
        <Project src={"/img/MTGpp.webp"} deployment={'https://peaceful-escarpment-11973.herokuapp.com/'} repository={'https://github.com/HammontreeWebDev/MTGpp'} alt={'screenshot of MGT++ deck building application'} appTitle={'MTG++'} content={'Node.js | Express.js | MySQL | JavaScript | jQuery | Handlebars | Bootstrap | CSS'} photo_icon={ isSmallScreen ? 'img/falling.webp' : 'img/falling-mobile.webp'} lowResPhoto={'img/falling-low-res.webp'}/>

        {/* falling.webp Photo by Tim Grundtner: https://www.pexels.com/photo/woman-in-white-dress-falling-on-gray-concrete-floor-3856635/ */}

        {/* PokéWire App */}
        <Project src={"/img/pokewire.webp"} deployment={'https://luckysal.github.io/pokewire/index.html'} repository={'https://github.com/LuckySal/pokewire'} alt={'screenshot of PokéWire application'} appTitle={'PokéWire'} content={'HTML5 | JavaScript | jQuery | Bulma | CSS | API'} photo_icon={ isSmallScreen ? 'img/child.webp' : 'img/child-mobile.webp'} lowResPhoto={'img/child-low-res.webp'}/>

        {/* child.webp Photo by Soner Arkan: https://www.pexels.com/photo/little-boy-running-on-beach-rocks-with-a-pikachu-balloon-17504187/ */}

      </main>
    </>
  )
}

export default Portfolio;