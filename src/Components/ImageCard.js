import React from 'react';

class ImageCard extends React.Component {

	constructor(props) {
		super(props);

		this.imageRef = React.createRef();
		this.state = { spans: 0 }
	}

	componentDidMount(){
		this.imageRef.current.addEventListener('load', this.setHeight)
	}

	setHeight = () => {
		
		const height = this.imageRef.current.height;
		const spans = Math.ceil(height / 10)
		this.setState({
			spans 
		});
	}

	render() {
		let {image} = this.props;
		let {spans} = this.state;

		return (
			<div style={ { gridRowEnd: `span ${spans}` } }>
				<img ref={this.imageRef} src={image.urls.regular} alt={image.alt_description}/>
			</div>
		);
	}
}

export default ImageCard;
