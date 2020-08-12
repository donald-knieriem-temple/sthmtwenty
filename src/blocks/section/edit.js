/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks, withColors, PanelColorSettings, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl, Button, ResponsiveWrapper } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import Section from '../../../templates/components/section/section.js';
import { compose } from '@wordpress/compose';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
//import './editor.scss';
//import '../../../templates/components/section/section.scss';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

const Edit = ( props ) => {

	var { 
		className, 
		classList,
		attributes: { anchor, backgroundId, backgroundUrl, videoId, videoUrl },
		setAttributes,
		backgroundColor,
		setBackgroundColor
	} = props;

	console.log("on edit: ", backgroundColor);

	const removeMedia = () => {
		props.setAttributes({
			backgroundId: 0,
			backgroundUrl: ''
		});
	}
 
 	const onSelectMedia = (media) => {
		props.setAttributes({
			backgroundId: media.id,
			backgroundUrl: media.url
		});
	}
 
	const removeVideo = () => {
		props.setAttributes({
			videoId: 0,
			videoUrl: ''
		});
	}
 
 	const onSelectVideo = (media) => {
		props.setAttributes({
			videoId: media.id,
			videoUrl: media.url
		});
	}

	return (
		<>
			<Section bg={ backgroundColor ? backgroundColor.slug : '' }
			anchor={ anchor }>
				Section #{ anchor }: { backgroundColor && backgroundColor.slug ? "bg-" + backgroundColor.slug : "No Background Color" }
				<InnerBlocks />
			</Section>
			<InspectorControls>
			<PanelBody title={ __('Section Options', 'sthmtwenty') }>
				<TextControl
					label={ __( 'Anchor' ) }
					value={ anchor }
					onChange={ ( newAnchor ) => setAttributes( { anchor: newAnchor, } ) }
				/>
				<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectMedia}
								value={backgroundId}
								allowedTypes={ ['image'] }
								render={({open}) => (
									<Button 
										className={backgroundId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
										onClick={open}
									>
										{backgroundId == 0 && __('Choose an image', 'awp')}
										{props.media != undefined && 
						            			<ResponsiveWrapper
									    		naturalWidth={ props.media.media_details.width }
											naturalHeight={ props.media.media_details.height }
									    	>
									    		<img src={props.media.source_url} />
									    	</ResponsiveWrapper>
						            		}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						{backgroundId != 0 && 
							<MediaUploadCheck>
								<MediaUpload
									title={__('Replace image', 'awp')}
									value={backgroundId}
									onSelect={onSelectMedia}
									allowedTypes={['image']}
									render={({open}) => (
										<Button onClick={open} isDefault isLarge>{__('Replace image', 'awp')}</Button>
									)}
								/>
							</MediaUploadCheck>
						}
						{backgroundId != 0 && 
							<MediaUploadCheck>
								<Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'awp')}</Button>
							</MediaUploadCheck>
						}
					</div>

					<div className="editor-post-video">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectVideo}
								value={videoId}
								allowedTypes={ ['video'] }
								render={({open}) => (
									<Button 
										className={videoId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
										onClick={open}
									>
										{videoId == 0 && __('Choose a video', 'awp')}
										{props.video != undefined && 
						            			<ResponsiveWrapper
									    		naturalWidth={ props.video.media_details.width }
											naturalHeight={ props.video.media_details.height }
									    	>
									    		<video src={props.video.source_url} />
									    	</ResponsiveWrapper>
						            		}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						{videoId != 0 && 
							<MediaUploadCheck>
								<MediaUpload
									title={__('Replace video', 'awp')}
									value={videoId}
									onSelect={onSelectVideo}
									allowedTypes={['video']}
									render={({open}) => (
										<Button onClick={open} isDefault isLarge>{__('Replace video', 'awp')}</Button>
									)}
								/>
							</MediaUploadCheck>
						}
						{videoId != 0 && 
							<MediaUploadCheck>
								<Button onClick={removeVideo} isLink isDestructive>{__('Remove video', 'awp')}</Button>
							</MediaUploadCheck>
						}
					</div>

			</PanelBody>
			<PanelColorSettings
				title={ __('Color Settings') }
				colorSettings={[
				{
					value: backgroundColor.color,
					onChange: setBackgroundColor, 
					label: __('Section Background'),
				},
				]}
			/>

			</InspectorControls>
		</>
	);
}

const applyWithSelect = withSelect( (select, ownProps) => {
	return { media: ownProps.attributes.backgroundId ? select('core').getMedia(ownProps.attributes.backgroundId) : undefined }; 
});

const applyVideoWithSelect = withSelect( (select, ownProps) => {
	return { video: ownProps.attributes.videoId ? select('core').getMedia(ownProps.attributes.videoId) : undefined }; 
});
export default compose( 
withColors( 'backgroundColor' ), applyWithSelect, applyVideoWithSelect )( Edit );