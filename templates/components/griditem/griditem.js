import { Component } from '@wordpress/element';


class GridItem extends Component {

	render()
	{
		var bg = '';
		var className = '';
		if(this.props.bg)
		{
			bg = 'bg-' + this.props.bg;
			className += " " + bg;

		}
		
		if( this.props.widthS )
			{ className += ` ${ this.props.widthS }@s`; }
		if( this.props.widthM )
			{ className += ` ${ this.props.widthM }@m`; }
		if( this.props.widthL )
			{ className += ` ${ this.props.widthL }@l`; }
		if( this.props.widthXL )
			{ className += ` ${ this.props.widthXL }@xl`; }
		
		return (

			<div className={ className }>
				{ this.props.children }
			</div>
		);
	}
}

export default GridItem;