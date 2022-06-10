import Link from 'next/link';

function HomePage(props) {
    return (
      <ul>
        <li>
          <Link href="/static-page/static-intro">Get Static Props (Use of export async function getStaticProps())</Link>
        </li>
        <li>
          <Link href="/static-page/increamental-static-generation">Get Increamental Static Props (Use of export async function getStaticProps() in increamental way)</Link>
        </li>
      </ul>
    );
  }
  
  export default HomePage;
