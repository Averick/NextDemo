//pre-generate a page
//re-generate it on every request, at most every x seconds
//{ serve old page if re-generation is not needed yet }, { generate, store and serve new page otherwise }

import path from 'path';
import fs from 'fs/promises'; //NextJS will ignore this import for client side. fs will not be part of client side script bundle

function HomePage(props) {
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
        console.log('re-generating');
        const filePath = path.join(process.cwd(), 'data', 'dummy.json');
        const jsonData = await fs.readFile(filePath);
        const data = JSON.parse(jsonData);
        return {
            props: data,
            revalidate: 10 //re-generate this page after 10 seconds, re-created atmost once every 10 seconds. This will be used in production env not in dev env
        };
  }
  
  export default HomePage;
