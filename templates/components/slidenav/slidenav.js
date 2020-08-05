import { Component } from '@wordpress/element';


class Slidenav extends Component {

	render()
	{

		var classNamePrev = '';
		var classNameNext = '';
		if(this.props.large){
			classNamePrev += 'uk-slidenav-large';
			classNameNext += 'uk-slidenav-large';
		} else {
			classNamePrev += 'uk-slidenav';
			classNameNext += 'uk-slidenav';
		}
		if( this.props.positionPrev ){
			classNamePrev += " " + positionPrev.join(' ');
		}

		if( this.props.positionNext ){
			classNameNext += " " + positionNext.join(' ');
		}
		
		if( this.props.hover){
			classNamePrev += ' uk-hidden-hover';
			classNameNext += ' uk-hidden-hover';
		}

		let key = `data-uk-${this.props.for}-item`;
		const apropsprev = { key: 'previous'};
		const apropsnext = { key: 'next'};
		return 
		(
			<>
				<a className={ classNamePrev } href="#" data-uk-slidenav-previous { ... apropsprev }></a>//
				<a className={ classNameNext } href="#" data-uk-slidenav-next { ... apropsnext }></a>
			</>
		);
	
	}
}

export default Slidenav;