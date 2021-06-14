import { useRouter } from 'next/router';
//our-domain.com/news/details

function DetailPage() {
	const router = useRouter();

	const newsId = router.query.newsId;

	//Possible Backend Request w/ API

	return <h1>The Detail Page</h1>
}

export default DetailPage; 