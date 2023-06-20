import React, { useEffect, useState } from 'react';

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