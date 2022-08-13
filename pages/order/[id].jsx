import Head from 'next/head';
import { MENU } from '../../constants/MENU';

import styles from './styles.module.css';

export default function Order({ results }) {
  const [id] = results;
  console.log(id);
  console.log(MENU[id]);
  const { title, price, image } = MENU[id - 1];
  console.log(title);

  return (
    <>
      <Head>
        <title>Order {title}</title>
      </Head>
      {/* <main className={styles.mainContainer}>
        <h1>Platillo {title}</h1>
        <img src={image} alt={title} />
        <p>Precio: {price}</p>
        <button>Ordenar</button>
      </main> */}
      <main className={styles.mainContainer}>
        <header className={styles.mainHeader}>
          <div className={styles.leftHeader}>
            <h1 className={styles.title}>
              Platillo <span className={styles.city}>{title}</span>
            </h1>
            <p className={styles.description}>{price}</p>
            <a className={styles.btnMenu} href='#'>
              Ordenar
            </a>
          </div>
          <div className={styles.rightHeader}>
            <img className={styles.imgHeader} src={image} alt='Pizza main' />
          </div>
        </header>
        <div>
          <p className={styles.counter}>
            Platillos ya ordenados: <span className={styles.quantity}>0</span>
          </p>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const results = [id];

  return {
    props: {
      results,
    },
  };
}
