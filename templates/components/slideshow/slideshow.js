import { Component } from '@wordpress/element';
import  Slidenav  from '../slidenav/slidenav.js';
import  Dotnav  from '../dotnav/dotnav.js';

class Slideshow extends Component {

	render()
	{
		var slideshowAtts = Array();

		if (this.props.animation)
		{ 
			slideshowAtts.push( 'animation:' + this.props.animation );
		}
		if (this.props.autoplay)
		{
			slideshowAtts.push( 'autoplay:' + this.props.autoplay ); 
		}
		if (this.props.finite)
		{
			slideshowAtts.push(  'finite:' + this.props.finite );
		}
		if (this.props.ratio )
		{
			slideshowAtts.push( 'ratio:' + this.props.ratio );
		}
		if (this.props.minHeight && this.props.minHeight != -1 )
		{
			slideshowAtts.push( 'min-height:' + this.props.minHeight );
		}
		if (this.props.maxHeight && this.props.maxHeight != -1 )
		{
			slideshowAtts.push( 'max-height:' + this.props.maxHeight );
		}

		return (
			<div className={ "uk-slideshow" } data-uk-slideshow={ slideshowAtts.join('; ') } >
			    <ul className={ "uk-slideshow-items" }>
			    	{ this.props.children }
			    </ul>
			</div>
		);
	}
}

export default Slideshow;