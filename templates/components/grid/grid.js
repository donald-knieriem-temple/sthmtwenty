import { Component } from '@wordpress/element';


class Grid extends Component {

	render()
	{
		var className = '';
		if( this.props.gap )
			{ `${ this.props.gap }`; }
		if( this.props.divider )
			{ className += ' uk-grid-divider'; }
		if( this.props.match )
			{ className += ' uk-grid-match'; }
		if( this.props.childWidthS )
			{ className += ` ${ this.props.childWidthS }@s`; }
		if( this.props.childWidthM )
			{ className += ` ${ this.props.childWidthM }@m`; }
		if( this.props.childWidthL )
			{ className += ` ${ this.props.childWidthL }@l`; }
		if( this.props.childWidthXL )
			{ className += ` ${ this.props.childWidthXL }@xl`; }

		return (
			<div className={ className } data-uk-grid>
				{ this.props.children }
			</div>
		);
	}
}

export default Grid;