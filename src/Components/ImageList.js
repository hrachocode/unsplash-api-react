import React from 'react';

// Custom Components
import ImageCard from './ImageCard';

// Custom CSS
import './App.css';

class ImageList extends React.Component {

	getList = (images) => {
		return ( 
	 		<div className='image-block'>
			    { images.map((image) => { 
				 	return ( 
			 			// <img key={ id } src={ urls.regular } alt={ description || alt_description } />
						<ImageCard key={image.id} image={image} /> 	 		
			 	 	)
				}) } 
 	 		</div>
	 	)
	}

	render() {
		return (
			<div>{this.getList(this.props.images)}</div>
			
		);
	}
}

export default ImageList;
