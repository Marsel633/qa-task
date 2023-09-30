import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header/header";
import styles from "./layout.module.scss"

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className={styles.container}>
      {children}
      </main>
      <Footer/>
    </>
  );
};
