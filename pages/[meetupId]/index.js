import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
	return (
		<MeetupDetail
			image='https://images.unsplash.com/photo-1558497513-f0133e055abf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
			title='First Cleanup'
			address='12424 S. Vampire Ave. RU 29291'
			description='Very dirty.'
		/>
	)
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1'
				},
			},
			{
				params: {
					meetupId: 'm2'
				}
			}
		]
	}
}

export async function getStaticProps(context) {

	const meetupId = context.params.meetupId

	console.log(meetupId)

	return {
		props: {
			image: 'https://images.unsplash.com/photo-1558497513-f0133e055abf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
			id: meetupId,
			title: 'First Cleanup',
			address: '12424 S. Vampire Ave. RU 29291',
			description: 'Very dirty.'
		}
	}
}

export default MeetupDetails