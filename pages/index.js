
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Cleanup',
		image: 'https://images.unsplash.com/photo-1558497513-f0133e055abf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
		address: '10832 N. Igor, RU 20010',
		description: 'Mid level dirty.'
	},
	{
		id: 'm2',
		title: 'A Second Cleanup',
		image: 'https://images.unsplash.com/photo-1526951521990-620dc14c214b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80',
		address: '102221 South Beach, RU 20220',
		description: 'High level dirty.'
	},
]

const HomePage = () => {
	return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;