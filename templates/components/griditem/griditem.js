import { Component } from '@wordpress/element';


class GridItem extends Component {

	render()
	{
		var bg = '';
		var newClassName = this.props.className != '' ? `${this.props.className}` : '';
		if(this.props.bg)
		{
			newClassName += " bg-" + this.props.bg;
		}
		
		if( this.props.widthS )
			{ newClassName += ` ${ this.props.widthS }@s`; }
		if( this.props.widthM )
			{ newClassName += ` ${ this.props.widthM }@m`; }
		if( this.props.widthL )
			{ newClassName += ` ${ this.props.widthL }@l`; }
		if( this.props.widthXL )
			{ newClassName += ` ${ this.props.widthXL }@xl`; }
		
		return (

			<div className={ newClassName }>
				<div className={ this.props.padding }>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default GridItem;