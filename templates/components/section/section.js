import React, { Component } from 'react';


class Section extends Component {

	render()
	{
		var className = `uk-section ${ this.props.type }`;
		return (

			<div className={ className } id={ this.props.anchor }>
				{ this.props.children }
			</div>
		);
	}
}

export default Section;