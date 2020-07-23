import { Component } from '@wordpress/element';


class Section extends Component {

	render()
	{
		var bg = '';
		var className = 'uk-section';
		if(this.props.bg)
		{
			bg = 'bg-' + this.props.bg;
			className += " " + bg;

		}
		
		return (

			<div className={ className } id={ this.props.anchor }>
				{ this.props.children }
			</div>
		);
	}
}

export default Section;