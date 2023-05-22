import { useRouter } from 'next/router';
import { UrlParams } from '../dependencies/context';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';


export default function PageProperties({}) {
	let urlParams = useContext(UrlParams);

	let {
		id,
		key
	} = urlParams;

	let [data, setData] = useState({});

	useEffect(() => {
		if (!id) return;
		axios.get('https://notion-embed-tools.nysics.workers.dev/databases/' + id).then((r) =>{
			setData(r);
		})
	}, [urlParams])

	
	return(<>
		<span className="has-yellow-color">URL Key: {key ? key : 'Loading key..'}</span><br/>
		URL ID: {id ? id : 'Loading ID...'}<br/>
		Data: <pre>{JSON.stringify(data, null, '\t')}</pre>
	</>);
}