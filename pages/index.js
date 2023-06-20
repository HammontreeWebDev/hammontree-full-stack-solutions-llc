import React, { useEffect, useState } from 'react';
import '../styles/homepage.module.css';
// css
import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from '../components/Welcome';
import MobileWelcome from '../components/MobileWelcome';

const IndexPage = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  return (
    <>
      {shouldRender && (
        <main className="home-page">
          {typeof window !== 'undefined' && window.innerWidth > 540 ? (
            <Welcome />
          ) : (
            <MobileWelcome />
          )}
        </main>
      )}
    </>
  );
};

export default IndexPage;