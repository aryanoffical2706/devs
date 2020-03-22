export const submitMarketingLeadDetails = (marketingLeadData) => 
	fetch(`https://api1.bytemonk.co:9090/api/v1/clientData/lead`,
		{
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(marketingLeadData)
		},
	).then(results => {
		return results.json();
	}).then(data => data).catch((e) => {
		throw new Error(e);
	});