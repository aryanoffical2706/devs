export const submitMarketingLeadDetails = (marketingLeadData) => 
	fetch(`https://api1.bytemonk.co:9090/api/v1/clientData/lead`,
		{
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				"X_BM_REQUEST_AGENT_ID": "agent-123",
				"X_BM_REQUEST_ORG_ID": "4fe26103-50a6-4e2a-9bda-24c4ed4149cb"
			},
			body: JSON.stringify(marketingLeadData)
		},
	).then(results => {
		return results.json();
	}).catch((e) => {
		throw new Error(e);
	});