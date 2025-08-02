import Head from 'next/head';
import styles from './login.module.css';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.card}>
          <h2 className={styles.title}>Welcome Back</h2>
          <p className={styles.subtitle}>Log in to your account</p>
          <form className={styles.form}>
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="password" placeholder="Password" className={styles.input} />
            <button type="submit" className={styles.button}>Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}
