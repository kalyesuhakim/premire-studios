import React from 'react';
import Layout from '../layouts/index';

const AboutPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">About</h1>
                </header>

                <div className="entry-body">
                  <p>
                    
                </p>
                  <p>
                  The film industry or motion picture industry, comprises the technological and commercial institutions of filmmaking, i.e., film production companies, film studios, cinematography, animation, film production, screenwriting, pre-production, post production, film festivals, distribution and actors, film directors
                </p>
                  <hr />
                  <hr />
                  <p>A studio or independent investor decides to purchase rights to the film. People are brought together to make the film (screenwriter, producer, director, cast, crew). The film is completed and sent to the studio. ... The distribution company shows the movie (screening) to prospective buyers representing the theaters.</p>
                </div>
              </div>
            </div>
            <div className="entry-media">
              <img src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default AboutPage;
