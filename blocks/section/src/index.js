import { registerBlockType } from '@wordpress/blocks';
 
const blockStyle = {
    backgroundColor: '#900',
    color: '#fff',
    padding: '20px',
};
 
registerBlockType( 'sthm-section', {
    title: 'STHM Section',
    icon: 'universal-access-alt',
    category: 'layout',
    example: {},
    edit() {
        return (
        	<div style={ blockStyle }>Hello World, step 1 (from the editor).</div>
        	);

    },
    save() {
        return (
        <div style={ blockStyle }>Hello World, step 1 (from the frontend).</div>
        );
    },
} );