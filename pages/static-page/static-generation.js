//Pre-generate a page (with data prepared on the server-side) during build time.
//pages are prepared ahead to time and can be cached by the server / cdn serving the app
//use export async function getStaticProps(context) {...}, this function can be used only inside page components. It needs to have code which is needed only on server side.
// Inside this method, no client side code is accessible. And it won't load as bundle in browser.
//NextJS pre-renders by default.

import path from 'path';
import fs from 'fs/promises'; //NextJS will ignore this import for client side. fs will not be part of client side script bundle

function StaticIntroPage(props) {
  const {products} = props;

    return (
      <ul>
        {
          products.map(p => <li key={p.id}>{p.title}</li>)
        }
      </ul>
    );
  }

  //this returns an object with props key. This basically prepares propes for this component(HomePage)
  //for this file, getStaticProps will be executed first and than HomePage component
  export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'dummy.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    if(!data) {
      return {
        redirect: {
          destination: '/error-page'
        }
      };
    }

    if(data.length === 0) {
      return {
        notFound: true
      };
    }

    return {
      props: data,
      //notFound: true/false
      //redirect: 'some other page url'
    };
  }
  
  export default StaticIntroPage;
