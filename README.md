# This is a fork of the [Redocly/redoc](https://github.com/Redocly/redoc) project. It will be supported for the Bandwidth Organization only! If you would like to contribute or have any issues with the project, please contribute to the parent project and NOT this repository.



<div align="center">
  <img alt="Bandwidth Logo" src="https://raw.githubusercontent.com/Bandwidth/redoc/main//docs/images/bw-icon.svg" width="150px" />
  <img alt="Redoc logo" src="https://raw.githubusercontent.com/Redocly/redoc/main//docs/images/redoc.png" width="400px" />

  # Generate interactive API documentation from OpenAPI definitions

  [![npm](http://img.shields.io/npm/v/redoc.svg)](https://www.npmjs.com/package/redoc) [![License](https://img.shields.io/npm/l/redoc.svg)](https://github.com/Redocly/redoc/blob/main/LICENSE)

  [![bundle size](http://img.badgesize.io/https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js?compression=gzip&max=300000)](https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js) [![npm](https://img.shields.io/npm/dm/redoc.svg)](https://www.npmjs.com/package/redoc) [![](https://data.jsdelivr.com/v1/package/npm/redoc/badge)](https://www.jsdelivr.com/package/npm/redoc)
</div>


## About Redoc

Redoc is an open source tool for generating documentation from OpenAPI (formerly Swagger) definitions.

By default Redoc offers a three-panel, responsive layout:

- The left panel contains a search bar and navigation menu.
- The central panel contains the documentation.
- The right panel contains request and response examples.

![Redoc demo](https://raw.githubusercontent.com/Redocly/redoc/main/demo/redoc-demo.png)

## Live demo

If you want to see how Redoc renders your OpenAPI definition,
you can try it out online at https://redocly.github.io/redoc/.

A version of the Swagger Petstore API is displayed by default.
To test it with your own OpenAPI definition,
enter the URL for your definition and select **TRY IT**.

## Redoc features

- Responsive three-panel design with menu/scrolling synchronization
- Support for OpenAPI 3.1, OpenAPI 3.0, and Swagger 2.0
- [Multiple deployment options](https://redocly.com/docs/redoc/)
- Interactive interface so your users can try the API immediately
- Ability to integrate your API introduction into the side menu
- High-level grouping in side menu with the [`x-tagGroups`](https://redocly.com/docs/api-reference-docs/specification-extensions/x-tag-groups/) specification extension
- [Simple integration with `create-react-app`](https://redocly.com/docs/redoc/quickstart/react/)
- Code samples support (with vendor extension) <br>
  ![](docs/images/code-samples-demo.gif)

## Usage

Additionally, all the 1.x releases are hosted on our GitHub Pages-based CDN **(deprecated)**:
- particular release, for example `v1.2.0`: https://rebilly.github.io/ReDoc/releases/v1.2.0/redoc.min.js
- `v1.x.x` release: https://rebilly.github.io/ReDoc/releases/v1.x.x/redoc.min.js
- `latest` release: https://rebilly.github.io/ReDoc/releases/latest/redoc.min.js - points to latest 1.x.x release since 2.x releases are not hosted on this CDN but on unpkg.

### Generate documentation from the CLI

If you have Node installed, quickly generate documentation using `npx`:

```
npx @redocly/cli build-docs openapi.yaml 
```

The tool outputs by default to a file named `redoc-static.html` that you can open in your browser.

> [Redocly CLI](https://github.com/Redocly/redocly-cli/) does more than docs; check it out and add linting, bundling, and more to your API workflow.

### Add an HTML element to the page

Create an HTML page, or edit an existing one, and add the following within the body tags:

```html
    <redoc spec-url="http://petstore.swagger.io/v2/swagger.json"></redoc>
    <script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"> </script>
```

Open the HTML file in your browser, and your API documentation is shown on the page.

Add your own `spec-url` to the `<redoc>` tag; this attribute can also be a local file. The JavaScript library can also be installed locally using `npm` and served from your own server, see the [HTML deployment documentation](https://redocly.com/docs/redoc/deployment/html/) for more details.

### More usage options

Check out the [deployment documentation](./deploment/index/md) for more options, and detailed documentation for each.

## Redoc vs. Reference

Redoc is Redocly's community-edition product. Looking for something more?
We also offer [hosted API reference documentation](https://redocly.com/docs/api-registry/guides/api-registry-quickstart/)
with additional features including:

* Try-it console
* Automated code samples
* Pagination
* Extra theme options

### Documentation and resources

- [Reference docs](https://redocly.com/docs/api-reference-docs/getting-started/) - we take care of the hosting
- [Redoc](https://redocly.com/docs/redoc/) - detailed documentation for this open source project (also in the `docs/` folder)
- [Command-line interface to bundle your docs into a web-ready HTML file](https://redocly.com/docs/cli/commands/build-docs/)
- API linting, bundling, and much more with open source [Redocly CLI](https://redocly.com/docs/cli)

## Showcase

A sample of the organizations using Redocly tools in the wild:

- [Rebilly](https://api-reference.rebilly.com/)
- [Docker Engine](https://docs.docker.com/engine/api/v1.25/)
- [Zuora](https://www.zuora.com/developer/api-reference/)
- [Discourse](http://docs.discourse.org)
- [Commbox](https://www.commbox.io/api/)
- [APIs.guru](https://apis.guru/api-doc/)
- [BoxKnight](https://www.docs.boxknight.com/)

_Pull requests to add your own API page to the list are welcome_

## Configuration

Redoc is highly configurable, see the [configuration documentation](docs/config.md) for details.

### OpenAPI specification extensions
Redoc uses the following [specification extensions](https://redocly.com/docs/api-reference-docs/spec-extensions/):

* [`x-logo`](docs/redoc-vendor-extensions.md#x-logo) - is used to specify API logo
* [`x-traitTag`](docs/redoc-vendor-extensions.md#x-traitTag) - useful for tags that refer to non-navigation properties like Pagination, Rate-Limits, etc
* [`x-codeSamples`](docs/redoc-vendor-extensions.md#x-codeSamples) - specify operation code samples
* [`x-examples`](docs/redoc-vendor-extensions.md#x-examples) - specify JSON example for requests
* [`x-nullable`](docs/redoc-vendor-extensions.md#x-nullable) - mark schema param as a nullable
* [`x-displayName`](docs/redoc-vendor-extensions.md#x-displayname) - specify human-friendly names for the menu categories
* [`x-tagGroups`](docs/redoc-vendor-extensions.md#x-tagGroups) - group tags by categories in the side menu
* [`x-servers`](docs/redoc-vendor-extensions.md#x-servers) - ability to specify different servers for API (backported from OpenAPI 3.0)
* [`x-ignoredHeaderParameters`](docs/redoc-vendor-extensions.md#x-ignoredHeaderParameters) - ability to specify header parameter names to ignore
* [`x-additionalPropertiesName`](docs/redoc-vendor-extensions.md#x-additionalPropertiesName) - ability to supply a descriptive name for the additional property keys
* [`x-summary`](docs/redoc-vendor-extensions.md#x-summary) - for Response object, use as the response button text, with description rendered under the button
* [`x-extendedDiscriminator`](docs/redoc-vendor-extensions.md#x-extendedDiscriminator) - in Schemas, uses this to solve name-clash issues with the standard discriminator
* [`x-explicitMappingOnly`](docs/redoc-vendor-extensions.md#x-explicitMappingOnly) - in Schemas, display a more descriptive property name in objects with additionalProperties when viewing the property list with an object

## Releases

* `disableSearch` - disable search indexing and search box.
* `minCharacterLengthToInitSearch` - set minimal characters length to init search, default `3`, minimal `1`.
* `expandDefaultServerVariables` - enable expanding default server variables, default `false`.
* `expandResponses` - specify which responses to expand by default by response codes. Values should be passed as comma-separated list without spaces e.g. `expandResponses="200,201"`. Special value `"all"` expands all responses by default. Be careful: this option can slow-down documentation rendering time.
* `generatedPayloadSamplesMaxDepth` - set the maximum render depth for JSON payload samples (responses and request body). The default value is `10`.
* `maxDisplayedEnumValues` - display only specified number of enum values. hide rest values under spoiler.
* `hideDownloadButton` - do not show "Download" spec button. **THIS DOESN'T MAKE YOUR SPEC PRIVATE**, it just hides the button.
* `downloadFileName` - set a custom file name for the downloaded API definition file.
* `downloadDefinitionUrl` - If the 'Download' button is visible in the API reference documentation (hideDownloadButton=false), the URL configured here opens when that button is selected. Provide it as an absolute URL with the full URI scheme.
* `hideHostname` - if set, the protocol and hostname is not shown in the operation definition.
* `hideLoading` - do not show loading animation. Useful for small docs.
* `hideFab` - do not show FAB in mobile view. Useful for implementing a custom floating action button.
* `hideSchemaPattern` - if set, the pattern is not shown in the schema.
* `hideSingleRequestSampleTab` - do not show the request sample tab for requests with only one sample.
* `showObjectSchemaExamples` - show object schema example in the properties, default `false`.
* `expandSingleSchemaField` - automatically expand single field in a schema
* `schemaExpansionLevel` - specifies whether to automatically expand schemas. Special value `"all"` expands all levels. The default value is `0`.
* `jsonSampleExpandLevel` - set the default expand level for JSON payload samples (responses and request body). Special value `"all"` expands all levels. The default value is `2`.
* `hideSchemaTitles` - do not display schema `title` next to to the type
* `simpleOneOfTypeLabel` - show only unique oneOf types in the label without titles
* `sortEnumValuesAlphabetically` - set to true, sorts all enum values in all schemas alphabetically
* `sortOperationsAlphabetically` - set to true, sorts operations in the navigation sidebar and in the middle panel alphabetically
* `sortTagsAlphabetically` - set to true, sorts tags in the navigation sidebar and in the middle panel alphabetically
* `lazyRendering` - _Not implemented yet_ ~~if set, enables lazy rendering mode in ReDoc. This mode is useful for APIs with big number of operations (e.g. > 50). In this mode ReDoc shows initial screen ASAP and then renders the rest operations asynchronously while showing progress bar on the top. Check out the [demo](\\redocly.github.io/redoc) for the example.~~
* `menuToggle` - if true, clicking second time on expanded menu item collapses it, default `true`.
* `nativeScrollbars` - use native scrollbar for sidemenu instead of perfect-scroll (scrolling performance optimization for big specs).
* `onlyRequiredInSamples` - shows only required fields in request samples.
* `pathInMiddlePanel` - show path link and HTTP verb in the middle panel instead of the right one.
* `requiredPropsFirst` - show required properties first ordered in the same order as in `required` array.
* `scrollYOffset` - If set, specifies a vertical scroll-offset. This is often useful when there are fixed positioned elements at the top of the page, such as navbars, headers etc;
`scrollYOffset` can be specified in various ways:
  * **number**: A fixed number of pixels to be used as offset.
  * **selector**: selector of the element to be used for specifying the offset. The distance from the top of the page to the element's bottom is used as offset.
  * **function**: A getter function. Must return a number representing the offset (in pixels).
* `showExtensions` - show vendor extensions ("x-" fields). Extensions used by Redoc are ignored. Can be boolean or an array of `string` with names of extensions to display.
* `sortPropsAlphabetically` - sort properties alphabetically.
* `payloadSampleIdx` - if set, payload sample is inserted at this index or last. Indexes start from 0.
* `theme` - Redoc theme. For details check [theme docs](#redoc-theme-object).
* `untrustedSpec` - if set, the spec is considered untrusted and all HTML/markdown is sanitized to prevent XSS. **Disabled by default** for performance reasons. **Enable this option if you work with untrusted user data!**
* `nonce` - if set, the provided value is injected in every injected HTML element in the `nonce` attribute. Useful when using CSP, see https://webpack.js.org/guides/csp/.
* `sideNavStyle` - can be specified in various ways:
  * **summary-only**: displays a summary in the sidebar navigation item. (**default**)
  * **path-only**: displays a path in the sidebar navigation item.
  * **id-only**: displays the operation id with a fallback to the path in the sidebar navigation item.
* `showWebhookVerb` - when set to `true`, shows the HTTP request method for webhooks in operations and in the sidebar.


## Development
see [CONTRIBUTING.md](.github/CONTRIBUTING.md)
