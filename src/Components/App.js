import React from 'react';

// Custom components
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

	state = {
		images: []
	}

	fetchSubmitData = async keyword => {
		const promise = await unsplash.get('/search/photos/', {
			params: { query: keyword } 
		});

		this.setState({
			images : promise.data.results 
		});
		
	}


	render() {
		let {images} = this.state;
		
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onInitialSubmit={this.fetchSubmitData} />
				<ImageList images={images} />
			</div>
		);
	}
}


export default App;