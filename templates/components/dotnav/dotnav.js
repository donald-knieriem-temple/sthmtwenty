import { Component } from '@wordpress/element';

class Dotnav extends Component {

	render()
	{
		const attributeIndex = this.props.attributeIndex;
		const position = this.props.position;
		position.push("dotnav--container");
		const items = [];
		for( var index = 0; index < this.props.numItems; index++ )
		{
			var liprops = {};

			if( attributeIndex ){
				let key = `data-${attributeIndex}`;
				let val = index;
			 	liprops[key] = val;
			}

			if( index === 0 ){
				liprops['className'] = 'uk-active';
			}
			items.push(<li key={ index } { ... liprops}><a href={ "#" }></a></li>);
		}
		
		//console.log("in dotnav",items);

		//return (<p> Text</p>);

		return (
			<div className={ position.join(' ') } >
				<ul className={"uk-dotnav"}>
					{ items }
				</ul>
			</div>
		);
	
	}
}

export default Dotnav;