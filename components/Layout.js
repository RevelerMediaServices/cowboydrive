import Head from "next/head";
import Navbar from "./Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

const Layout = props => (
  <div>
    <Head>
      <title>Reveler Media Services SEO Template</title>
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
