import { Button } from "../../components/Button";
import styles from "./notfound.module.css";

export const NotFound = () => {
  return (
    <main className={styles.card}>
      <p>Opss...</p>
      <h1 className={styles.title}>404</h1>
      <p>Página não encontrada!</p>
      <Button href="/" outline>
        Voltar para o início
      </Button>
    </main>
  );
};
