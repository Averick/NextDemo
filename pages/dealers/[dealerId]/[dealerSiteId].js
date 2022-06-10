import {useRouter} from 'next/router';

function SelectedDealerSitePage() {
    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h1>The selected site for a selected dealer.</h1>
        </div>
    );
}

export default SelectedDealerSitePage;
