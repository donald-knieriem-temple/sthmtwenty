import { Component } from '@wordpress/element';


class Section extends Component {

	render()
	{
		var bg = '';
		var classes = ['uk-section'];
		if(this.props.bg)
		{
			bg = 'bg-' + this.props.bg;
			classes.push(bg);

			classes.push(`has-${this.props.bg}-background-color`);
		}

		if(this.props.backgroundImage != '')
		{
			classes.push("uk-section--has-bg-image");
		}

		if(this.props.backgroundVideo != '')
		{
			classes.push("uk-section--has-bg-video");
		}
		
		const blockStyle = {
			backgroundImage: this.props.backgroundImage != '' ? 'url("' + this.props.backgroundImage + '")' : 'none'
		};
		
		return (

			<div className={ classes.join(' ') } id={ this.props.anchor } style={ blockStyle }>
			{ this.props.backgroundVideo && 
				<video autoplay loop muted className={'uk-section__video'} 
					poster={ this.props.backgroundImage != '' ? this.props.backgroundImage : '' }>
				<source src={this.props.backgroundVideo} type="video/mp4" />
				</video>
			}
				{ this.props.children }
			</div>
		);
	}
}

export default Section;