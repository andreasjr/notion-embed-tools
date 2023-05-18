import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { UrlParams } from '../dependencies/context';
import PageProperties from '../modules/page-properties';

export default function Test() {
	const router = useRouter();
	return(<>
		<UrlParams.Provider value={router.query}>
			<PageProperties />
		</UrlParams.Provider>
	</>);
}