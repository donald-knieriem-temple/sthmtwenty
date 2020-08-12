import { Component } from '@wordpress/element';
import  Slidenav  from '../slidenav/slidenav.js';
import  Dotnav  from '../dotnav/dotnav.js';

class Slideshow extends Component {

	render()
	{
		var slideshowAtts = [];

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

		var hasNav = this.props.hasNav;
		var hasDotnav = this.props.hasDotnav;
		
		return (
			<div className={ "uk-slideshow" } data-uk-slideshow={ slideshowAtts.join('; ') } >
			    <ul className={ "uk-slideshow-items" }>
			    	{ this.props.children }
			    </ul>

			    { this.props.hasNav && 
				( <Slidenav 
					large={ false }
					hover={ true }
					for={ "slideshow" }
					positionPrev={ [
						'uk-position-center-left',
						'uk-position-small',
						'pl-4',
						'mx-auto'
					] }
					positionNext={ [
						'uk-position-center-right',
						'uk-position-small',
						'pr-4',
						'mx-auto'
					] }
				/> )
				}
	
			    { this.props.hasDotnav &&
			    ( <Dotnav 
		    		position={ [
						'uk-position-bottom-center',
						'uk-position-small',
						'py-3',
					] }
					attributeIndex={ 'uk-slideshow-item' }
					numItems={ this.props.numItems }
				/> )
	    		}
			</div>
		);
	}
}

export default Slideshow;