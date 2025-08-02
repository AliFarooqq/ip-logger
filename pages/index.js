// pages/index.js
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  // 🔁 Trigger IP logging when user visits homepage
  useEffect(() => {
    fetch('/api/log'); // Triggers log.js
  }, []);

  const handleJoinNow = () => {
    router.push('/api/log'); // Redirects + logs again
  };

  return (
    <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'white',
      fontFamily: 'Helvetica Neue, sans-serif',
      textShadow: '0 2px 4px rgba(0,0,0,0.6)'
    }}>
      <Head>
        <title>Welcome | JoinSpace</title>
      </Head>

      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>JoinSpace</h1>
      <p style={{ fontSize: '1.3rem', marginBottom: '2rem', maxWidth: '600px', textAlign: 'center' }}>
        Connect with millions of people around the world. Share your moments, meet new friends, and be part of something bigger.
      </p>

      <button onClick={handleJoinNow} style={{
        padding: '14px 32px',
        backgroundColor: '#ff5a5f',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        fontSize: '1rem',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        transition: 'background 0.3s ease'
      }}>
        Join Now
      </button>
    </div>
  );
}
