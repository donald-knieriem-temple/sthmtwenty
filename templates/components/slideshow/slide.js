import { Component } from '@wordpress/element';

class SlideshowItem extends Component {

    render()
    {

        var classes = ["uk-text-center"];

        if ( this.props.contentContainer == 'cover' )
        {
            classes = [ "uk-position-center", "uk-position-small", "uk-text-center", "uk-light" ];
        }
            
        if ( this.props.contentContainer == 'overlay' )
        {
            classes = [ "uk-overlay", "uk-overlay-primary", "uk-position-bottom", "uk-text-center", "uk-transition-slide-bottom" ];
        }

        classes.push("slideshow__slide");
        return (
           <li>
            { this.props.mediaUrl  && 
                <img src={ this.props.mediaUrl } alt="" data-uk-cover="" /> 
            }
            { this.props.children && 
                <div className={ classes.join(' ') }>
            		{ this.props.children }
            	</div>
            }
            </li>
        );
    }
}

export default SlideshowItem;