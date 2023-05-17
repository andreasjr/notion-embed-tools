import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Test() {
	const router = useRouter();
	const { database } = router.query;
	return(<>
	Hey { " " + (database ? database : 'Loading...') }
	</>);
}