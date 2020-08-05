import { Component } from '@wordpress/element';

class Dotnav extends Component {

	render()
	{
		const attributeIndex = this.props.attributeIndex;
		const items = this.props.items;
		var itemProps = items.map(function(item, index){
		var liprops = {};
			if(attributeIndex){
				let key = `data-${attributeIndex}`;
				let val = `${loop.index0}`;
			 	liprops[key] = val;
			}

			if(item.active){
				liprops['className'] = 'uk-active';
			}
		});
		
		return 
		(
			<div className={ this.props.position|join(' ') }>
				<ul className="uk-dotnav">
					for( [index, item] in Object.entries(this.props.items) )
					{
						<li { ... liprops}><a href={ item.href }></a></li>
					}	
				</ul>
			</div>
		);
	
	}
}

export default Dotnav;