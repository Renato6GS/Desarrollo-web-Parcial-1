import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { MENU } from '../constants/MENU';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurante El Mejor</title>
        <meta name='description' content='El mejor restaurante de Guatemala' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.mainContainer}>
        <header className={styles.mainHeader}>
          <div className={styles.leftHeader}>
            <h1 className={styles.title}>
              Con El Servicio de Entrega Más Rápido de <span className={styles.city}>Tu Ciudad</span>
            </h1>
            <p className={styles.description}>Elige el platillo que más te gusta al mejor precio 😋</p>
            <a className={styles.btnMenu} href='#'>
              Ver menú
            </a>
          </div>
          <div className={styles.rightHeader}>
            <img className={styles.imgHeader} src='/img/main.jpg' alt='Pizza main' />
          </div>
        </header>
        <section className={styles.menu}>
          <h2 className={styles.menuTitle}>• Menú •</h2>
          <div className={styles.listOfItems}>
            {MENU.map(({ id, title, price, image, url }) => {
              return (
                <div className={styles.menuItem} key={id}>
                  <img className={styles.itemImage} src={image} alt={title} />

                  <div className={styles.itemDescription}>
                    <h3 className={styles.titleItem}>{title}</h3>
                    <p className={styles.price}>{price}</p>
                    <Link href={url}>
                      <a className={styles.order}>Ordenar</a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
