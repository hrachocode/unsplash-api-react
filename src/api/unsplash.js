import axios from 'axios';

export default axios.create({
	headers: {
		Authorization: 'Client-ID 4ba96a0c4a7aca189f577b892f66e056fca0ef5f8285ffb0e137368a85899ca0'
	},
	baseURL: "https://api.unsplash.com"
})