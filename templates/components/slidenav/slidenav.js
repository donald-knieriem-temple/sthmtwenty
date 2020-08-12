import { Component } from '@wordpress/element';

class Slidenav extends Component {

	render()
	{

		var classNamePrev = [];
		var classNameNext = [];

		if( this.props.large ){
			classNamePrev.push('uk-slidenav-large');
			classNameNext.push('uk-slidenav-large');
		} else {
			classNamePrev.push('uk-slidenav');
			classNameNext.push('uk-slidenav');
		}

		if( this.props.positionPrev ){
			classNamePrev.push( ...this.props.positionPrev );
		}

		if( this.props.positionNext ){
			classNameNext.push( ...this.props.positionNext );
		}
		
		if( this.props.hover ){
			classNamePrev.push('uk-hidden-hover');
			classNameNext.push('uk-hidden-hover');
		}

		let key = `uk-${this.props.for}-item`;

		const apropsprev = {};
		const apropsnext = {}; 
		
		apropsprev[key] = 'previous';
		apropsnext[key] = 'next';

		apropsprev['uk-slidenav-previous'] = "";
		apropsnext['uk-slidenav-next'] = "";

		apropsprev['uk--item'] = "previous";
		apropsnext['uk--item'] = "next";

		console.log(apropsprev, apropsnext);

		return (
			<>
				<a className={ classNamePrev.join(' ') } href={""} { ... apropsprev }></a>
				<a className={ classNameNext.join(' ') } href={""} { ... apropsnext }></a>
			</>
		);
	
	}
}

export default Slidenav;