import { Component } from '@wordpress/element';


class Grid extends Component {

	render()
	{
		var newClassName = this.props.className != '' ? `${this.props.className}` : '';
		if( this.props.gap )
			{ newClassName += ` ${ this.props.gap }`; }
		if( this.props.divider )
			{ newClassName += ' uk-grid-divider'; }
		if( this.props.match )
			{ newClassName += ' uk-grid-match'; }
		if( this.props.childWidthS )
			{ newClassName += ` ${ this.props.childWidthS }@s`; }
		if( this.props.childWidthM )
			{ newClassName += ` ${ this.props.childWidthM }@m`; }
		if( this.props.childWidthL )
			{ newClassName += ` ${ this.props.childWidthL }@l`; }
		if( this.props.childWidthXL )
			{ newClassName += ` ${ this.props.childWidthXL }@xl`; }

		console.log( "new class name", newClassName);
		return (
			<div className={ newClassName } data-uk-grid>
				{ this.props.children }
			</div>
		);
	}
}

export default Grid;