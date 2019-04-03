import React from 'react';

class SearchBar extends React.Component {
	
	state = {
		term: ''
	}

	onFormSubmit = event => {
		event.preventDefault();

		this.props.onInitialSubmit(this.state.term);
	}

	render() {
		return (
			<div className='ui segment'>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="search-text">Search for input</label>
						<input name='search-text' type="text" 
								value={this.state.term} 
								onChange={ event => this.setState({ term: event.target.value }) }/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;