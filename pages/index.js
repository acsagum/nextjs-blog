import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello Everyone! My Name Is Adrian Sagum!</p>
    <h1>10 Things That Require Zero Talent</h1>
    <p1>1. Being On Time</p1><br>
    <p1>2. Making An Effort</p1><br>
    <p1>3. Being High Energy</p1><br>
    <p1>4. Having A Positive Attitude</p1><br>
    <p1>5. Being Passionate</p1><br>
    <p1>6. Using Good Body Language</p1><br>
    <p1>7. Being Coachable</p1><br>
    <p1>8. Doing A Little Extra</p1><br>
    <p1>9. Being Prepared</p1><br>
    <p1>10. Having A Strong Work Ethic</p1><br>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
