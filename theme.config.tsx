const config = {
  readMore: "Read More →",
  titleSuffix: " – dahliaOS",
  darkMode: true,
  footer: (
    <footer>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <small> Copyright - 2019 - {new Date().getFullYear()} @TimZhao</small>
      </div>
    </footer>
  ),
  head: () => {
    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Blog" />
        <link rel="canonical" href="https://blog.dahliaos.io" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:image" content="https://imgur.com/pqgjEpd.png" />
        <meta property="og:site_name" content="dahliaOS" />
        <meta property="og:title" content="Blog" key="title" />
        <meta name="description" content="dahliaOS Blog" />
        <meta name="og:description" content="dahliaOS Blog" />
        <meta property="og:url" content="https://blog.dahliaos.io" />
        <meta name="theme-color" content="#ff3d00" />
      </>
    );
  },
  navs: [],
};

export default config;
