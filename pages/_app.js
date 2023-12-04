import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/provider.jsx"

export default function App({ Component, pageProps }) {
  return (

<ThemeProvider>

    <Layout>



      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>



  );
}
