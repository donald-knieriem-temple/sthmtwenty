[![Chromatic](https://img.shields.io/endpoint?url=https%3A%2F%2Fshields-chromatic-37fphvd5hura.runkit.sh%2F%3Fapp%3D5edfc92b24e57500222e5c09)](https://www.chromatic.com/builds?appId=5edfc92b24e57500222e5c09)
[![Storybook](https://img.shields.io/badge/-storybook-success)](https://donald-knieriem-temple.github.io/theme-twenty/?path=/story/welcome--to-storybook)
[![GitHub release](https://img.shields.io/github/package-json/v/donald-knieriem-temple/theme-twenty)](https://GitHub.com/donald-knieriem-temple/theme-twenty/releases/)

This is a Wordpress Theme Built on Timber with built-in Storybook documentation

## Requirements

- [Wordpress Timber](https://www.upstatement.com/timber/) [Timber Docs](https://timber.github.io/docs/)
- [Toolset](https://toolset.com) [Toolset Docs](https://toolset.com/documentation/)
- [Storybook](https://storybook.js.org/) (HTML)
- [Chromatic](https://www.chromatic.com/)

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs storybook.<br />
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.


### `npm run build`

`TODO`

1. Builds theme
	* Compiles SASS
	* Minifies CSS and JS
2. Builds static storybook for github pages in `docs/` directory


## Notes

### Structure

This theme uses repeatable components (Atoms and Molecules as defined in Atomic Design) to create blocks (Organisms)

#### Components

* A component definition is comprised of:
	* A directory within the /components folder
	* One or more `.twig` template files 
	* Corresponding SCSS definitions
	* A Storybook stories file

For example, the button component is:

```
/components/button/
button.scss
button.stories.js
button.twig
```

#### Blocks

Blocks are made available to all pages, and must be used in lieu of the classic editor to take advantage of theme functionality

Available blocks:

- Section
	- Uses section and container components
	- Section background color: default, muted, primary, secondary
	- Section background cover image
	- Container width: default, xsmall, small, large, xlarge, expand
	- content
- Switcher Section
	- Uses section, container, and switcher components
	- Like section, but switches between content section panes added as children blocks
	- Repeater: pane name, section
- Grid
	- Useful for custom grid layout combining different blocks. Check that another block doesn't already exist displaying your content in a grid
	- Uses grid component
	- Grid gap: default, small, medium, large, collapse
	- Grid child width: default, 1/2, 1/3, 1/4, 1/5, 1/6
		- Always set to collapse to single column 
	- Grid match height: yes, no
	- Repeater: content
- Heading
	- Default gutenberg heading block
- Icon Grid
 

__Block Development__

- blocks are built in  `/blocks` using wp-scripts:

1. [Create Default Block](https://developer.wordpress.org/block-editor/packages/packages-create-block/#quick-start)
	`npx @wordpress/create-block [options] [slug]`

2. Rename [block]/[slug].php -> [block]/index.php so our theme loads it
3. In index.php's block_init():
	- `$script_dir_uri = get_stylesheet_directory_uri() . "/blocks/[block]/";`
	- replace `plugins_url( [filename] ... ),` with `$script_dir_uri . [filename]`
	- On the last line, replace `add_action( 'init' ...[block]_block_init )` with a call to `[block]_block_init()`, as this is already loaded during init() by the theme
4. In index.js, replace `save, ` with `save: Save,` 
5. In save.js, replace `save()` with `Save()`
6. run `npm run build`


### Development Process

1. Use the `develop` branch for visual testing. 
2. Chromatic will run automatically on commit.
3. When you are ready to push a new version, create a pull request
4. The Chromatic build must be approved for the pull request to succeed