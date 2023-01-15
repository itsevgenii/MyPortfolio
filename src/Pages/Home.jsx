import Header from "../Components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <div className="bottomDiv">
                <a
                  href="https://github.com/itsevgenii"
                  align="left"
                  className="githubStatsB"
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=itsevgenii&langs_count=10&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&locale=en&custom_title=Top%20%Languages"
                    alt="Top Languages"
                  />
                </a>
                <p>
                  JavaScript, ReactJS, NextJS, Tailwind, HTML, CSS, SASS, Figma,
                  Photoshop
                </p>
                <a
                  href="http://www.github.com/itsevgenii"
                  className="githubStatsB"
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=itsevgenii&show_icons=true&hide=stars,issues,&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&show_icons=true"
                    alt="itsevgenii's GitHub stats"
                  />
                </a>
              </div>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, PostgreSQL, Couchbase</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
