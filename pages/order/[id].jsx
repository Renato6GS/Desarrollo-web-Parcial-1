import Head from 'next/head';
import { useEffect, useState } from 'react';
import { MENU } from '../../constants/MENU';
import Link from 'next/link';

import styles from './styles.module.css';

export default function Order({ results }) {
  const [id] = results;
  const { title, price, image } = MENU[id - 1];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getCounts = localStorage.getItem('counts');
    setCount(getCounts);
  }, []);

  const handleLocalStorage = () => {
    const getCounts = localStorage.getItem('counts') || 0;
    if (Number.isNaN(Number(getCounts))) {
      setCount(1);
      localStorage.setItem('counts', 1);
      return;
    }
    const newCount = parseInt(getCounts) + 1;
    localStorage.setItem('counts', newCount);
    setCount(newCount);
  };

  return (
    <>
      <Head>
        <title>Order {title}</title>
      </Head>
      <main className={styles.mainContainer}>
        <Link href={'/'}>
          <a className={styles.regresar}>Regresar</a>
        </Link>
        <header className={styles.mainHeader}>
          <div className={styles.leftHeader}>
            <h1 className={styles.title}>
              Platillo <span className={styles.city}>{title}</span>
            </h1>
            <p className={styles.description}>{price}</p>
            <button className={styles.btnMenu} onClick={handleLocalStorage}>
              Ordenar
            </button>
          </div>
          <div className={styles.rightHeader}>
            <img className={styles.imgHeader} src={image} alt='Pizza main' />
          </div>
        </header>
        <div className={styles.counter}>
          Platillos ya ordenados: <span className={styles.quantity}>{count}</span>
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
