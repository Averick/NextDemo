import Link from 'next/link'; // it's not in curley braces, because it's default export from next/link package library

function HomePage() {
  //using <a> tag as it is, has disadvantage. It's considered as new http request. 
  //If clicked, application will loss it's current state.
  //better way to import Link component from next library, Link prefetches underline data automatically for us.
  return (
    <div>
      <h1> The Home Page!!</h1>
      <ul>
        <li>
          <Link href="/products">Search Result Page</Link>
        </li>
        <li>
          <Link href="/dealers">Dealers Page</Link>
        </li>
        <li>
          <Link href="/about">Search Result Page</Link>
        </li>
        <li>
          <Link href="/static-page">Static Introduction</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;