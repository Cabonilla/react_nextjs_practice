import Head from 'next/head';
import { useRouter } from "next/router";
import { Fragment } from 'react';
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

//our-domain.com/new-meetup

function NewMeetupPage() {
	const router = useRouter()

	async function addMeetupHandler(enteredMeetupData) {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetupData),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();

		console.log(data);

		router.push('/');
	}

	return (
		<Fragment>
			<Head>
				<title>Add a New Cleanup</title>
				<meta
					name='description'
					content='Add a new cleanup listing!'
				></meta>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</Fragment>
	)
}

export default NewMeetupPage;